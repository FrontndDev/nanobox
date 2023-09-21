<template>
  <div class="delivery-address">
    <CardWithSettings title="Адреса доставки">
      <template #dropdown>
        <div class="delivery-address__addresses">
          <div
              class="delivery-address__address"
              :class="{ 'active': address.edited }"
              v-for="(address, idx) in addressesToDisplay"
              :key="address.id"
          >
            <Input
                disabled
                title-color="#4B535A"
                title-indent="4px"
                width="100%"
                :default-value="address.address"
                :title="`Адрес ${idx + 1}`"
                v-if="editedAddressIdx !== idx"
            />
            <div class="delivery-address__change-inputs" v-if="editedAddressIdx === idx">
              <div class="delivery-address__change-inputs-title">
                {{ `Адрес ${idx + 1}` }}
              </div>
              <div>
                <Select
                    max-width="100%"
                    title="Страна"
                    title-color="#4B535A"
                    :default-value="dropdownCountries.filter(country => country.id === address.country_id)[0]"
                    :dropdown="dropdownCountries"
                    @custom-select="changeCountry"
                />
                <Select
                    max-width="100%"
                    title="Город"
                    title-color="#4B535A"
                    :dropdown="dropdownCities"
                    :default-value="getDefaultValueForCity(address.city_id)"
                    :update-default-value="true"
                    @custom-select="changeCity"
                />
                <Input
                    width="100%"
                    title="Улица"
                    title-color="#4B535A"
                    :default-value="addresses[idx].street"
                    @custom-input="changeStreet"
                />
                <Input
                    width="100%"
                    title="Дом"
                    title-color="#4B535A"
                    :default-value="addresses[idx].house"
                    @custom-input="changeHouse"
                />
                <Input
                    width="100%"
                    title="Квартира"
                    title-color="#4B535A"
                    :default-value="addresses[idx].flat"
                    @custom-input="changeFlat"
                />
              </div>
            </div>

            <div class="delivery-address__address-icons">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  @click="deletedAddressId = address.id"
              >
                <path d="M7.33463 3.16667H10.668C10.668 2.72464 10.4924 2.30072 10.1798 1.98816C9.86725 1.67559 9.44333 1.5 9.0013 1.5C8.55927 1.5 8.13535 1.67559 7.82279 1.98816C7.51023 2.30072 7.33463 2.72464 7.33463 3.16667ZM6.08463 3.16667C6.08463 2.78364 6.16008 2.40437 6.30665 2.05051C6.45323 1.69664 6.66807 1.37511 6.93891 1.10427C7.20974 0.833434 7.53127 0.618594 7.88514 0.472018C8.23901 0.325442 8.61828 0.25 9.0013 0.25C9.38432 0.25 9.76359 0.325442 10.1175 0.472018C10.4713 0.618594 10.7929 0.833434 11.0637 1.10427C11.3345 1.37511 11.5494 1.69664 11.6959 2.05051C11.8425 2.40437 11.918 2.78364 11.918 3.16667H16.7096C16.8754 3.16667 17.0344 3.23251 17.1516 3.34973C17.2688 3.46694 17.3346 3.62591 17.3346 3.79167C17.3346 3.95743 17.2688 4.1164 17.1516 4.23361C17.0344 4.35082 16.8754 4.41667 16.7096 4.41667H15.6096L14.6346 14.5092C14.5598 15.2825 14.1997 16.0002 13.6244 16.5224C13.0491 17.0445 12.2999 17.3336 11.523 17.3333H6.47963C5.70285 17.3334 4.95389 17.0442 4.37876 16.5221C3.80363 16 3.44358 15.2823 3.3688 14.5092L2.39297 4.41667H1.29297C1.12721 4.41667 0.968237 4.35082 0.851027 4.23361C0.733817 4.1164 0.667969 3.95743 0.667969 3.79167C0.667969 3.62591 0.733817 3.46694 0.851027 3.34973C0.968237 3.23251 1.12721 3.16667 1.29297 3.16667H6.08463ZM7.7513 7.125C7.7513 6.95924 7.68545 6.80027 7.56824 6.68306C7.45103 6.56585 7.29206 6.5 7.1263 6.5C6.96054 6.5 6.80157 6.56585 6.68436 6.68306C6.56715 6.80027 6.5013 6.95924 6.5013 7.125V13.375C6.5013 13.5408 6.56715 13.6997 6.68436 13.8169C6.80157 13.9342 6.96054 14 7.1263 14C7.29206 14 7.45103 13.9342 7.56824 13.8169C7.68545 13.6997 7.7513 13.5408 7.7513 13.375V7.125ZM10.8763 6.5C11.0421 6.5 11.201 6.56585 11.3182 6.68306C11.4355 6.80027 11.5013 6.95924 11.5013 7.125V13.375C11.5013 13.5408 11.4355 13.6997 11.3182 13.8169C11.201 13.9342 11.0421 14 10.8763 14C10.7105 14 10.5516 13.9342 10.4344 13.8169C10.3171 13.6997 10.2513 13.5408 10.2513 13.375V7.125C10.2513 6.95924 10.3171 6.80027 10.4344 6.68306C10.5516 6.56585 10.7105 6.5 10.8763 6.5ZM4.61297 14.3892C4.65792 14.853 4.87401 15.2835 5.21911 15.5968C5.56421 15.91 6.01359 16.0834 6.47963 16.0833H11.523C11.989 16.0834 12.4384 15.91 12.7835 15.5968C13.1286 15.2835 13.3447 14.853 13.3896 14.3892L14.3546 4.41667H3.64797L4.61297 14.3892Z" fill="#4B535A"/>
              </svg>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  @click="editAddress(idx, address)"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9361 2.525C13.6235 2.21254 13.1997 2.03702 12.7578 2.03702C12.3158 2.03702 11.892 2.21254 11.5794 2.525L2.98443 11.12C2.67184 11.4325 2.49619 11.8563 2.49609 12.2983V16.6592C2.49609 17.1233 2.87359 17.5008 3.33776 17.5008H7.69943C8.14142 17.5007 8.56527 17.3251 8.87776 17.0125L17.4719 8.41666C17.7844 8.10412 17.9599 7.68027 17.9599 7.23833C17.9599 6.79639 17.7844 6.37254 17.4719 6.05999L13.9361 2.525ZM12.7578 3.70333L16.2936 7.23916L14.8553 8.6775L11.3194 5.14166L12.7578 3.70333ZM10.1411 6.31999L4.16276 12.2983V15.8333H7.69943L13.6778 9.85499L10.1419 6.31916L10.1411 6.31999Z" fill="#4B535A"/>
              </svg>
            </div>
          </div>

          <Button type="submit" name="Добавить адрес" @click="showAddAddressModal = true"/>
        </div>
      </template>
    </CardWithSettings>
  </div>
  <DeleteAddressModal
      :id="deletedAddressId"
      @close="deletedAddressId = 0"
      @delete="deleteAddress"
      v-if="deletedAddressId"
  />
  <EnterShippingAddressModal
      title="Добавить адрес"
      @close="showAddAddressModal = false"
      v-if="showAddAddressModal"
  />
</template>

<script>
import CardWithSettings from "@/components/Views/Settings/CardWithSettings.vue";
import Input from "@/components/Utils/Input.vue";
import Button from "@/components/Buttons/Button.vue";
import DeleteAddressModal from "@/components/Modals/DeleteAddressModal.vue";
import EnterShippingAddressModal from "@/components/Modals/EnterShippingAddressModal.vue";
import {mapActions, mapMutations, mapState} from "vuex";
import Select from "@/components/Utils/Select.vue";
import {updateAddress} from "@/api";

export default {
  name: "DeliveryAddress",
  components: {Select, EnterShippingAddressModal, DeleteAddressModal, Button, Input, CardWithSettings},
  data() {
    return {
      addressesForChange: [],
      addressesToDisplay: [],
      deletedAddressId: 0,
      showAddAddressModal: false,
      dropdownCities: [],
      editedAddressIdx: -1,
    }
  },
  methods: {
    ...mapActions('addresses', ['getAddresses', 'getCountries']),
    ...mapMutations('addresses', ['UPDATE_ADDRESS']),

    getDefaultValueForCity(cityId) {
      return this.addresses[this.editedAddressIdx].country.id === this.addressesForChange[this.editedAddressIdx].country_id ? this.dropdownCities.filter(city => city.id === cityId)[0] : this.dropdownCities[0]
    },
    deleteAddress() {
      this.cloneAddresses()
    },
    changeCountry(country) {
      this.addressesForChange[this.editedAddressIdx].country_id = +country.id
      this.setDropdownCities(+country.id)
    },
    changeCity(city) {
      this.addressesForChange[this.editedAddressIdx].city_id = +city.id
    },
    changeStreet(street) {
      this.addressesForChange[this.editedAddressIdx].street = String(street)
    },
    changeHouse(house) {
      this.addressesForChange[this.editedAddressIdx].house = String(house)
    },
    changeFlat(flat) {
      this.addressesForChange[this.editedAddressIdx].flat = String(flat)
    },
    editAddress(idx, address) {
      if (this.editedAddressIdx === -1) {
        this.setDropdownCities(address.country_id)
        this.editedAddressIdx = idx
      } else {
        if (this.editedAddressIdx === idx) {
          const addressForUpdate = this.addressesForChange[this.editedAddressIdx]
          const addressIdForUpdate = { ...this.addressesForChange[this.editedAddressIdx] }.id
          updateAddress(addressIdForUpdate, addressForUpdate)
              .then(response => {
                this.UPDATE_ADDRESS({ id: addressIdForUpdate, address: response.data })
                this.cloneAddresses()
              })
          this.editedAddressIdx = -1
        } else {
          this.editedAddressIdx = idx
        }
      }
    },
    setDropdownCities(countryId) {
      this.dropdownCities = this.countries
          .map(country => new Object({ country_id: country.id, cities: country.cities }))
          .filter(country => country.country_id === countryId)[0].cities
          .map(city => new Object({ id: city.id, value: city.name }))
    },
    cloneAddresses() {
      this.addressesForChange = this.addresses.map(address => new Object({
        id: address.id,
        country_id: address.country.id,
        city_id: address.city.id,
        street: address.street,
        house: address.house,
        flat: address.flat
      }))
      this.addressesToDisplay = this.addresses.map(address => new Object({
        id: address.id,
        country_id: address.country.id,
        city_id: address.city.id,
        address: `${address.country.name} ${address.city.name} ${address.street} ${address.house} ${address.flat}`,
      }))
    }
  },
  computed: {
    ...mapState('addresses', ['addresses']),
    ...mapState('addresses', ['countries']),

    dropdownCountries() {
      return this.countries.map(country => new Object({ id: country.id, value: country.name }))
    },
  },
  watch: {
    'addresses.length'() {
      this.cloneAddresses()
    }
  },
  mounted() {
    this.getAddresses()
    this.getCountries()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/settings/_deliveryAddress.scss";
</style>