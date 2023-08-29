class Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
}

class Patient extends Person {
  patientID: string;
  phoneNumber: number;
  emergencyContact: number;
  medicalHistory: string[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    patientID: string,
    phoneNumber: number,
    emergencyContact: number,
    medicalHistory: string[]
  ) {
    super(firstName, lastName, age, address);
    this.patientID = patientID;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }

  DisplayingPatientInformation() {
    console.log(this.patientID, this.firstName, this.lastName);
  }

  UpdateMedicalHistory(medical: string) {
    this.medicalHistory.push(medical);
  }
}

interface availabilityTime {
  date: string;
  time: string;
}

class MedicalStaff extends Person {
  staffID: number;
  position: string;
  department: string;
  availability: availabilityTime[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffID: number,
    position: string,
    department: string,
    availability: availabilityTime[]
  ) {
    super(firstName, lastName, age, address);
    this.staffID = staffID;
    this.position = position;
    this.department = department;
    this.availability = availability;
  }
}

class Doctor extends MedicalStaff {
  doctorID: string;
  specialization: string;
  ageRange: { min: number; max: number };

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffID: number,
    position: string,
    department: string,
    availability: availabilityTime[],
    doctorID: string,
    specialization: string,
    ageRange: { min: number; max: number }
  ) {
    super(
      firstName,
      lastName,
      age,
      address,
      staffID,
      position,
      department,
      availability
    );
    this.doctorID = doctorID;
    this.specialization = specialization;
    this.ageRange = ageRange;
  }

  DisplayingDoctorInformation() {
    console.log(
      this.doctorID,
      this.firstName,
      this.lastName,
      this.specialization
    );
  }
}
enum AppointmentStatus {
  Planned = "planned",
  Completed = "completed",
  Canceled = "canceled",
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  status: AppointmentStatus;

  constructor(
    patient: Patient,
    doctor: Doctor,
    date: string,
    time: string,
    status: AppointmentStatus
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
    this.status = status;
  }

  DisplayingAppointmentInformation() {
    this.patient.DisplayingPatientInformation(),
      this.doctor.DisplayingDoctorInformation(),
      console.log(this.date, this.time);
  }
}

class MedicalRecord {
  patient: Patient;
  doctor: Doctor;
  diagnosis: string;
  prescription: string;

  constructor(
    patient: Patient,
    doctor: Doctor,
    diagnosis: string,
    prescription: string
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.diagnosis = diagnosis;
    this.prescription = prescription;
  }
}

class Hospital {
  hospitalName: string;
  TreatmentsPatients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  medicalRecord: MedicalRecord[];

  constructor(
    hospitalName: string,
    TreatmentsPatients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[],
    medicalRecord: MedicalRecord[]
  ) {
    this.hospitalName = hospitalName;
    this.TreatmentsPatients = TreatmentsPatients;
    this.doctors = doctors;
    this.appointments = appointments;
    this.medicalRecord = medicalRecord;
  }
  DisplayingDoctorsAppointmentsBySpecialization(special: string) {
    this.appointments.forEach((appointment) => {
      if (appointment.doctor.specialization === special)
        console.log(appointment);
    });
  }

  createMedicalRecord(medicalRecordNew: MedicalRecord) {
    this.medicalRecord.push(medicalRecordNew);
  }

  getMedicalRecords(Id: string) {
    this.medicalRecord.forEach((medical_records) => {
      if (medical_records.patient.patientID === Id)
        console.log(medical_records);
    });
  }
  getDoctorSchedule(doctor: string) {
    try {
      const busyDates = this.appointments
        .filter((appointment) => appointment.doctor.doctorID === doctor)
        .map((appointment) => appointment.date);

      if (busyDates.length === 0)
        throw new Error("Doctor is available on all dates");

      console.log("Busy dates:", busyDates);
    } catch (error) {
      console.log(error);
    }
  }

  getDoctorAvailability(doctorID: string) {
    const doctor = this.doctors.find((doctor) => doctor.doctorID === doctorID);

    if (!doctor) {
      console.log("Doctor not found");
      return;
    }

    const allAppointments = this.appointments.filter(
      (appointment) => appointment.doctor.doctorID === doctor.doctorID
    );

    const doctorAvailability = doctor.availability.map(
      (availability) => availability.date
    );

    const availableDates = doctorAvailability.filter((date) => {
      return !allAppointments.some((appointment) => appointment.date === date);
    });

    console.log("Available dates:", availableDates);
  }

  AddingPatient(patient: Patient) {
    this.TreatmentsPatients.push(patient);
  }
  AddingDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }

  AddingAppointment(appointment: Appointment) {
    try {
      this.appointments.forEach((appointmentExists) => {
        if (
          appointmentExists.date === appointment.date &&
          appointmentExists.time === appointment.time
        )
          throw new Error("The queue exists");
        if (
          appointment.patient.age < appointmentExists.doctor.ageRange.min ||
          appointment.patient.age > appointmentExists.doctor.ageRange.max
        )
          throw new Error("The age is out of range");
      });

      this.appointments.push(appointment);
    } catch (error) {
      console.log(error);
    }
  }
  DisplayingAppointments() {
    this.appointments.forEach((appointment) => {
      console.log(appointment);
    });
  }
  DisplayingDoctorsAppointmentsByID(Id: string) {
    this.appointments.forEach((appointment) => {
      if (appointment.doctor.doctorID === Id) console.log(appointment);
    });
  }
  DisplayingPatientsAppointmentsByID(Id: string) {
    this.appointments.forEach((appointment) => {
      if (appointment.patient.patientID === Id) console.log(appointment);
    });
  }
  DisplayingAppointmentsToday(Id: string) {
    this.appointments.forEach((appointment) => {
      if (appointment.date === Id) console.log(appointment);
    });
  }
}

const patient1 = new Patient(
  "John",
  "Doe",
  30,
  "123 Main St",
  "P123",
  5551234567,
  5559876543,
  ["Allergies"]
);

const doctor1 = new Doctor(
  "Dr. Jane",
  "Smith",
  40,
  "456 Oak Ave",
  101,
  "Cardiologist",
  "Cardiology",
  [
    { date: "2023-08-28", time: "10:00 AM" },
    { date: "2023-08-21", time: "2:00 PM" },
  ],
  "D001",
  "Heart Specialist",
  { min: 30, max: 60 }
);

const appointment1 = new Appointment(
  patient1,
  doctor1,
  "2023-08-28",
  "10:00 AM",
  AppointmentStatus.Planned
);

const medicalRecord1 = new MedicalRecord(
  patient1,
  doctor1,
  "Hypertension",
  "Prescription: Medication A"
);

const hospital = new Hospital(
  "General Hospital",
  [patient1],
  [doctor1],
  [appointment1],
  [medicalRecord1]
);

hospital.AddingPatient(
  new Patient(
    "Alice",
    "Smith",
    25,
    "789 Elm St",
    "P124",
    5551112222,
    5559998888,
    []
  )
);
hospital.AddingDoctor(
  new Doctor(
    "Dr. Michael",
    "Johnson",
    45,
    "789 Pine Rd",
    102,
    "Dermatologist",
    "Dermatology",
    [{ date: "2023-08-29", time: "2:00 PM" }],
    "D002",
    "Skin Specialist",
    { min: 25, max: 70 }
  )
);
hospital.AddingAppointment(
  new Appointment(
    patient1,
    doctor1,
    "2023-08-30",
    "10:00 PM",
    AppointmentStatus.Planned
  )
);
hospital.getDoctorSchedule("D001");
hospital.getDoctorAvailability("D001");
