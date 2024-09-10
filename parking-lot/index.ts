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

class ParkingRate {
  private id: string;
  private hours: number;
  private rate: number;

  constructor(id: string, hours: number, rate: number) {
    this.id = id;
    this.hours = hours;
    this.rate = rate;
  }

  calculate(): number {
    return this.hours * this.rate;
  }
}

abstract class Payment {
  private amount: number;
  private status: PaymentStatus;
  private timestamp: Date;

  constructor(amount: number, status: PaymentStatus, timestamp: Date) {
    if (new.target === Payment) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.amount = amount;
    this.status = status;
    this.timestamp = timestamp;
  }

  abstract initiateTransaction(): void;
}

class Cash extends Payment {
  constructor(amount: number, status: PaymentStatus, timestamp: Date) {
    super(amount, status, timestamp);
  }

  initiateTransaction(): void {
    // TODO: Initiate a cash transaction
  }
}

class CreditCard extends Payment {
  constructor(amount: number, status: PaymentStatus, timestamp: Date) {
    super(amount, status, timestamp);
  }

  initiateTransaction(): void {
    // TODO: Intiate a CreditCard transaction
  }
}

class ExitIns {
  //T TODO: Implement ExitInst
}

abstract class Vehicle {
  private licensePlate: string;

  constructor(licensePlate: string) {
    if (new.target === Vehicle) {
      throw new Error("Abstract classes can't be instantiated");
    }
    this.licensePlate = licensePlate;
  }
  abstract assignTicket(ticket: ParkingTicket): void;
}

class ParkingTicket {
  private ticketNo: string;
  private timestamp: Date;
  private exit: Exit;
  private amount: number;
  private status: string;
  private vehicle: Vehicle;
  private payment: Payment;
  private entrance: Entrance;
  private exitIns: ExitIns;

  constructor(
    ticketNo: string,
    timestamp: Date,
    exit: Exit,
    amount: number,
    status: string,
    vehicle: Vehicle,
    payment: Payment,
    entrance: Entrance,
    exitIns: ExitIns,
  ) {
    this.ticketNo = ticketNo;
    this.timestamp = timestamp;
    this.exit = exit;
    this.amount = amount;
    this.status = status;
    this.vehicle = vehicle;
    this.payment = payment;
    this.entrance = entrance;
    this.exitIns = exitIns;
  }

  getTicketNo(): string {
    return this.ticketNo;
  }

  getTimestamp(): Date {
    return this.timestamp;
  }

  getExit(): Exit {
    return this.exit;
  }

  getAmount(): number {
    return this.amount;
  }

  getStatus(): string {
    return this.status;
  }

  getVehicle(): Vehicle {
    return this.vehicle;
  }

  getPayment(): Payment {
    return this.payment;
  }

  getEntrance(): Entrance {
    return this.entrance;
  }

  getExitIns(): ExitIns {
    return this.exitIns;
  }

  setStatus(status: string): void {
    this.status = status;
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

  abstract assignVehicle(vehicle: Vehicle): void;
  abstract removeVehicle(): void;

  getId(): string {
    return this.id;
  }

  getIsFree(): boolean {
    return this.isFree;
  }
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

class Car extends Vehicle {
  constructor(licenseNo: string) {
    super(licenseNo);
  }

  assignTicket(ticket: ParkingTicket): void {
    // TODO: Implementation for Car
  }
}

class Van extends Vehicle {
  constructor(licenseNo: string) {
    super(licenseNo);
  }

  assignTicket(ticket: ParkingTicket): void {
    // TODO: Implementation for Van
  }
}

class Truck extends Vehicle {
  private ticket?: ParkingTicket;

  constructor(licenseNo: string) {
    super(licenseNo);
  }

  assignTicket(ticket: ParkingTicket): void {
    if (this.ticket) {
      throw new Error("A ticket has already been assigned to this truck");
    }

    if (!ticket || ticket.getStatus() !== "PENDING") {
      throw new Error("Invalid or already processed ticket.");
    }

    this.ticket = ticket;

    ticket.setStatus("ASSIGNED");
  }

  getAssignedTicket(): ParkingTicket | undefined {
    return this.ticket;
  }
}

class MotorCycle extends Vehicle {
  constructor(licenseNo: string) {
    super(licenseNo);
  }

  assignTicket(ticket: ParkingTicket): void {
    // TODO: Implementation for MotorCycle
  }
}

abstract class Account {
  protected userName: string;
  protected password: string;
  protected person: Person;
  protected status: AccountStatus;

  constructor(
    userName: string,
    password: string,
    person: Person,
    status: AccountStatus,
  ) {
    if (new.target === Account) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.userName = userName;
    this.password = password;
    this.person = person;
    this.status = status;
  }

  abstract resetPassword(): void;
}

class Admin extends Account {
  constructor(
    userName: string,
    password: string,
    person: Person,
    status: AccountStatus,
  ) {
    super(userName, password, person, status);
  }

  addParkingSpot(spot: ParkingSpot): void {
    // TODO: Implementation for adding a parking spot
  }

  addDisplayBoard(displayBoard: DisplayBoard): void {
    // TODO: Implementation for adding a display board
  }

  addEntrance(entrance: Entrance): void {
    // TODO: Implementation for adding an entrance
  }

  addExit(exit: Exit): void {
    // TODO: Implementation for adding an exit
  }

  resetPassword(): void {
    // TODO: Implementation for resetting password
  }
}

class ParkingAttendant extends Account {
  constructor(
    userName: string,
    password: string,
    person: Person,
    status: AccountStatus,
  ) {
    super(userName, password, person, status);
  }

  processTicket(ticketNumber: string): void {
    // TODO: Implementation for processing a ticket
  }

  resetPassword(): void {
    // TODO: Implementation for resetting password
  }
}

class DisplayBoard {
  private id: string;
  private parkingSpots: Map<string, ParkingSpot[]>;

  constructor(id: string) {
    this.id = id;
    this.parkingSpots = new Map<string, ParkingSpot[]>();
  }

  addParkingSpot(spotType: string, spots: ParkingSpot[]): void {
    this.parkingSpots.set(spotType, spots);
  }

  showFreeSlot(): void {
    for (const [spotType, spots] of this.parkingSpots) {
      console.log(`Spot Type: ${spotType}`);
      spots.forEach((spot) => {
        if (spot.getIsFree()) {
          console.log(`Free spot ID: ${spot.getId()}`);
        }
      });
    }
  }
}

class Entrance {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }

  getTicket(): ParkingTicket {
    return new ParkingTicket("SampleTicketNumber");
  }
}

class Exit {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  validateTicket(ticket: ParkingTicket): void {
    // TODO: validate parking ticket
    console.log(`Validating ticket: ${ticket.getTicketNumber()}`);
  }
}

class ParkingLot {
  private static _instance: ParkingLot | null = null;

  private id: string;
  private name: string;
  private address: string;
  private parkingRate: number;

  private entranceMap: Map<string, Entrance> = new Map();
  private exitMap: Map<string, Exit> = new Map();
  private tickets: Map<string, ParkingTicket> = new Map();

  private constructor(
    id: string,
    name: string,
    address: string,
    parkingRate: number,
  ) {
    if (ParkingLot._instance) {
      throw new Error(
        "Singleton classes can't be instantiated more than once.",
      );
    }
    ParkingLot._instance = this;

    this.id = id;
    this.name = name;
    this.address = address;
    this.parkingRate = parkingRate;
  }

  static getInstance(
    id: string,
    name: string,
    address: string,
    parkingRate: number,
  ): ParkingLot {
    if (!ParkingLot._instance) {
      ParkingLot._instance = new ParkingLot(id, name, address, parkingRate);
    }
    return ParkingLot._instance;
  }

  addEntrance(entrance: Entrance): void {
    // TODO: ADd Entrance
  }

  addExit(exit: Exit): void {
    // TODO: Add Exit
  }

  getParkingTicket(vehicle: Vehicle): ParkingTicket {
    // TODO: get a praking ticket for given vehicle
    return {} as ParkingTicket;
  }

  isFull(type: string): boolean {
    // TODO: check if parking lot is full for given type
    return false;
  }
}
