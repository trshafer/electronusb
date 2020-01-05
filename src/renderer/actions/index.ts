import { PatientAction } from './patientActions';

export type RootActions = PatientAction[keyof PatientAction];
