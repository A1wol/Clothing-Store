<template>
    <div class="delivery-details">
        <v-container class="delivery-details__radio-buttons" fluid>

            <div class="delivery-details__radio-buttons__delivery-options">
                <div class="text-h5">
                    Choose the delivery option
                </div>
                <v-radio-group v-model="deliveryRadioGroup">
                    <v-radio label="Parcel locker" value="parcel-locker">
                        <template slot="label">
                            Parcel locker <v-icon class="ml-2">mdi-apps-box</v-icon>
                        </template></v-radio>
                    <v-radio value="courier">
                        <template slot="label">
                            Courier <v-icon class="ml-2">mdi-car</v-icon>
                        </template>
                    </v-radio>
                    <v-radio value="personal-pickup">
                        <template slot="label">
                            Personal pickup <v-icon class="ml-2">mdi-hand-extended</v-icon>
                        </template></v-radio>
                </v-radio-group>
            </div>
            <div class="delivery-details__radio-buttons__payment">
                <div class="text-h5">
                    Choose the payment method
                </div><v-radio-group v-model="paymentRadioGroup">
                    <v-radio value="credit-card">
                        <template slot="label">
                            Card <v-icon class="ml-2">mdi-credit-card</v-icon>
                        </template></v-radio>
                    <v-radio value="bank-transfer">
                        <template slot="label">
                            Bank transfer <v-icon class="ml-2">mdi-bank</v-icon>
                        </template>
                    </v-radio>
                </v-radio-group>
            </div>
        </v-container>
        <div class="delivery-details__payment-details">
            <div v-show="paymentRadioGroup === 'credit-card'" class="delivery-details__payment-details__card-payment">

                <v-form ref="form" v-model="isFormValid">
                    <div class="delivery-details__payment-details__card-payment__card-number">
                        <div class="text-h6">
                            Card number
                        </div>
                        <div> <v-text-field v-model="cardNumber" outlined dense
                                :rules="paymentRadioGroup === 'credit-card' ? [isCardNumberCorrect] : []"></v-text-field>
                        </div>
                    </div>
                    <div class="delivery-details__payment-details__card-payment__short-forms">

                        <div class="delivery-details__payment-details__card-payment__short-forms__expiration-date">
                            <div class="text-h6">
                                Expiration date
                            </div>
                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                                transition="scale-transition" offset-y max-width="290px" min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="expirationDateFormatted" label="Expiration date"
                                        prepend-icon="mdi-calendar"
                                        :rules="paymentRadioGroup === 'credit-card' ? expirationDateRules : []" readonly
                                        v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" type="month" no-title scrollable dark
                                    :min="new Date().toISOString()">
                                    <v-btn text color="white" @click="$refs.menu.save(date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </div>
                        <div class="delivery-details__payment-details__card-payment__short-forms__cvv">

                            <div>
                                <div class="text-h6">
                                    CVV
                                </div><v-text-field v-model="cvv" type="number" outlined dense
                                    :rules="paymentRadioGroup === 'credit-card' ? cvvRules : []"></v-text-field>
                            </div>
                        </div>
                    </div>

                </v-form>
            </div>
            <div v-show="paymentRadioGroup === 'bank-transfer'" class="delivery-details__payment-details__bank-transfer">
                Transfer money to the given account number
                <div class="font-weight-bold mt-5">mBank</div>
                <div>05 3141 2020 0070 4124 9430 4290</div>
            </div>
            <v-dialog transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn :disabled="!isFormValid" class="white--text mt-5" color="black" width="200px" v-bind="attrs"
                        v-on="on">ACCEPT</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="black" dark class="d-flex justify-center text-h5">See you next time!</v-toolbar>
                        <v-card-text class="mt-6">
                            <div class="text-h6 black--text">Delivery
                                Type<v-icon color="black" class="ml-3">mdi-truck-delivery-outline</v-icon></div>
                            <div v-if="deliveryRadioGroup === 'parcel-locker'" class="text-h5">
                                Your package will be waiting at the parcel locker soon
                            </div>
                            <div v-else-if="deliveryRadioGroup === 'courier'" class="text-h5">Your parcel will soon be on
                                its way
                                to you</div>
                            <div v-else class="text-h5">
                                We are waiting for you in the stationary store
                            </div>
                            <div class="text-h6 black--text mt-3">Payment
                                method<v-icon color="black" class="ml-3">mdi-cash-multiple</v-icon></div>
                            <div v-if="paymentRadioGroup === 'credit-card'" class="text-h5">
                                Your account has been debited by credit card
                            </div>
                            <div v-else class="text-h5">Your account has been debited via bank transfer</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "deliveryDetails",
    data: () => ({
        deliveryRadioGroup: 'parcel-locker',
        paymentRadioGroup: 'credit-card',
        isFormValid: false,
        cardNumber: 0,
        cardNumberRules: [
            v => !!v || 'Card Number is required',
            v => (v && v.length === 16) || '16 characters long'],

        expirationDateRules: [v => (v !== '/') || 'Date is required'],
        date: new Date().toISOString().substr(0, 8),
        menu: false,
        modal: false,
        cvv: 0,
        cvvRules: [
            v => !!v || 'CVV is required',
            v => (v && v.length === 3) || '3 characters long'],
    }),
    methods: {
        validateForm() {
            this.$refs.form.validate()
        },
        isCardNumberCorrect(number) {
            // 5168441223630339 - Sample Card Number
            if (number.length === 16) {
                let weights = [2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]
                let sum = 0;
                for (let i = weights.length - 1; i >= 0; i--) {
                    if (number.charAt(i) * weights[i] > 9) {
                        sum +=
                            parseInt((number.charAt(i) * weights[i]).toString().charAt(0)) +
                            parseInt((number.charAt(i) * weights[i]).toString().charAt(1))
                    }
                    else {
                        sum += number.charAt(i) * weights[i]
                    }
                }
                if (sum % 10 === 0) {
                    return true
                }
            }
            return 'Card number uncorrect'
        }
    },
    computed: {
        expirationDateFormatted() {
            let date = this.date.split('-').reverse()
            let month = date[0]
            let yearFormatted = date[1].slice(2, 4)
            return `${month}/${yearFormatted}`
        }
    },
});
</script>
<style scoped lang="scss">
.delivery-details {
    display: flex;
    flex-direction: column;

    &__radio-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__payment-details {

        &__card-payment {
            width: 100%;
            max-width: 500px;

            &__short-forms {
                display: flex;
                justify-content: space-between;

                &__expiration-date {
                    display: flex;
                    flex-direction: column;
                    max-width: 200px;
                }

                &__cvv {
                    max-width: 200px;
                }
            }
        }
    }
}

@media (max-width: 960px) {
    .delivery-details {
        &__radio-buttons {
            flex-direction: column;
        }
    }
}
</style>