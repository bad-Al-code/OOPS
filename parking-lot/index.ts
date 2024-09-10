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

class Vehicle {
  private licensePlate: string;

  constructor(licensePlate: string) {
    this.licensePlate = licensePlate;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  setLicensePlate(licensePlate: string): void {
    this.licensePlate = licensePlate;
  }
}

abstract class ParkingSpot {
  protected id: string;
  protected isFree: boolean;
  protected vehicle?: Vehicle;

  constructor(id: string, isFree: boolean, vehicle?: Vehicle) {
    if (new.target === ParkingSpot) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.id = id;
    this.isFree = isFree;
    this.vehicle = vehicle;
  }

  abstract getIsFree(): boolean;
  abstract assignVehicle(vehicle: Vehicle): void;
  abstract removeVehicle(): void;
}

class Handicapped extends ParkingSpot {
  constructor(id: string, isFree: boolean, vehicle?: Vehicle) {
    super(id, isFree, vehicle);
  }

  getIsFree(): boolean {
    return this.isFree;
  }

  assignVehicle(vehicle: Vehicle): void {
    if (this.isFree) {
      this.vehicle = vehicle;
      this.isFree = false;
    } else {
      throw new Error("Parking spot is not free");
    }
  }

  removeVehicle(): void {
    if (!this.isFree) {
      this.vehicle = undefined;
      this.isFree = true;
    } else {
      throw new Error("Parking spot is already free.");
    }
  }
}

class CompactSpot extends ParkingSpot {
  constructor(id: string, isFree: boolean, vehicle?: Vehicle) {
    super(id, isFree, vehicle);
  }

  getIsFree(): boolean {
    return this.isFree;
  }

  assignVehicle(vehicle: Vehicle): void {
    if (this.isFree) {
      this.vehicle = vehicle;
      this.isFree = false;
    } else {
      throw new Error("Parking spot is not free.");
    }
  }

  removeVehicle(): void {
    if (!this.isFree) {
      this.vehicle = undefined;
      this.isFree = true;
    } else {
      throw new Error("Parking spot is already free.");
    }
  }
}

class LargeSpot extends ParkingSpot {
  constructor(id: string, isFree: boolean, vehicle?: Vehicle) {
    super(id, isFree, vehicle);
  }

  getIsFree(): boolean {
    return this.isFree;
  }

  assignVehicle(vehicle: Vehicle): void {
    if (this.isFree) {
      this.vehicle = vehicle;
      this.isFree = false;
    } else {
      throw new Error("Parking spot is not free.");
    }
  }

  removeVehicle(): void {
    if (!this.isFree) {
      this.vehicle = undefined;
      this.isFree = true;
    } else {
      throw new Error("Parking spot is already free.");
    }
  }
}

class Motorcycle extends ParkingSpot {
  constructor(id: string, isFree: boolean, vehicle?: Vehicle) {
    super(id, isFree, vehicle);
  }

  getIsFree(): boolean {
    return this.isFree;
  }

  assignVehicle(vehicle: Vehicle): void {
    if (this.isFree) {
      this.vehicle = vehicle;
      this.isFree = false;
    } else {
      throw new Error("Parking spot is not free.");
    }
  }

  removeVehicle(): void {
    if (!this.isFree) {
      this.vehicle = undefined;
      this.isFree = true;
    } else {
      throw new Error("Parking spot is already free.");
    }
  }
}
