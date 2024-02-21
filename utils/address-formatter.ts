import {Address} from "../core/model/address";

export class AddressFormatter {
  static formatAddress(address: any): string {
    const formattedAddress =
      (address.apartment ? `Apt ${address.apartment}, ` : '') +
      (address.building ? `Building ${address.building}, ` : '') +
      (address.street ? `${address.street}, ` : '') +
      (address.city ? `${address.city}, ` : '') +
      (address.district ? `${address.district}, ` : '') +
      (address.region ? `${address.region}, ` : '') +
      (address.postalCode ? `Postal Code: ${address.postalCode}` : '');

    return formattedAddress.replace(/,\s*$/, '');
  }
}
