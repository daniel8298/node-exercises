
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Patient extends Person {
  patientID: string;

  constructor(firstName: string, lastName: string, patientID: string) {
    super(firstName, lastName);
    this.patientID = patientID;
  }

  DisplayingPatientInformation() {
    console.log(this.patientID, this.firstName, this.lastName);
  }
}

class Doctor extends Person {
  doctorID: string;
  specialization: string;

  constructor(
    firstName: string,
    lastName: string,
    doctorID: string,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
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
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;

  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }

  DisplayingAppointmentInformation() {
    this.patient.DisplayingPatientInformation(),
      this.doctor.DisplayingDoctorInformation(),
      console.log(this.date, this.time);
  }
}

class Hospital {
  hospitalName: string;
  TreatmentsPatients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];

  constructor(
    hospitalName: string,
    TreatmentsPatients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[]
  ) {
    this.hospitalName = hospitalName;
    this.TreatmentsPatients = TreatmentsPatients;
    this.doctors = doctors;
    this.appointments = appointments;
  }

  AddingPatient(patient: Patient) {
    this.TreatmentsPatients.push(patient);
  }
  AddingDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
  AddingAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }
  DisplayingAppointments() {
    appointments.forEach((appointment) => {
      console.log(appointment);
    });
  }
  DisplayingDoctorsAppointmentsByID(Id: string) {
    appointments.forEach((appointment) => {
      if (appointment.doctor.doctorID === Id) console.log(appointment);
    });
  }
  DisplayingPatientsAppointmentsByID(Id: string) {
    appointments.forEach((appointment) => {
      if (appointment.patient.patientID === Id) console.log(appointment);
    });
  }
  DisplayingAppointmentsToday(Id: string) {
    appointments.forEach((appointment) => {
      if (appointment.date === Id) console.log(appointment);
    });
  }
}

const patient1 = new Patient("ari", "dvi", "P12345");
const patient2 = new Patient("mosh", "rot", "P67890");
const patient3 = new Patient("or", "dev", "P24870");

const doctor1 = new Doctor("doc_avi", "tdi", "D98765", "surgical");
const doctor2 = new Doctor("doc_ben", "yos", "D54321", "orthopedics");
const doctor3 = new Doctor("doc_david", "git", "D98321", "parturient");

const appointment1 = new Appointment(patient1, doctor1, "2023-09-01", "10:00");
const appointment2 = new Appointment(patient2, doctor2, "2023-27-08", "15:30");

const patientRecords = [patient1, patient2];
const doctors = [doctor1, doctor2];
const appointments = [appointment1, appointment2];

const hospital = new Hospital(
  "Hadassah",
  patientRecords,
  doctors,
  appointments
);

hospital.AddingPatient(patient3);
hospital.AddingDoctor(doctor3);
const newAppointments = new Appointment(
  patient3,
  doctor3,
  "2023-27-08",
  "12:30"
);

hospital.AddingAppointment(newAppointments);
hospital.DisplayingAppointments();
// hospital.DisplayingDoctorsAppointmentsByID("D54321");
// hospital.DisplayingAppointmentsToday("2023-09-01");
// hospital.DisplayingPatientsAppointmentsByID("P12345");
