// Payment Status
enum PaymentStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  UNPAID = "UNPAID",
  REFUNDED = "REFUNDED",
}

// Account Status
enum AccountStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  CANCELED = "CANCELED",
  BLACKLISTED = "BLACKLISTED",
  NONE = "NONE",
}

class Person {
  private name: string;
  private address: Address;
  private email: string;
  private phone: string;

  constructor(name: string, address: Address, phone: string, email: string) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): Address {
    return this.address;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAddress(address: Address): void {
    this.address = address;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }
}

class Address {
  private zipCode: string;
  private address: string;
  private city: string;
  private state: string;
  private country: string;

  constructor(
    zipCode: string,
    address: string,
    city: string,
    state: string,
    country: string,
  ) {
    this.zipCode = zipCode;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  getZipCode(): string {
    return this.zipCode;
  }

  getAddress(): string {
    return this.address;
  }

  getCity(): string {
    return this.city;
  }

  getState(): string {
    return this.state;
  }

  getCountry(): string {
    return this.country;
  }

  setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  setCity(city: string): void {
    this.city = city;
  }

  setState(state: string): void {
    this.state = state;
  }

  setCountry(country: string): void {
    this.country = country;
  }
}
