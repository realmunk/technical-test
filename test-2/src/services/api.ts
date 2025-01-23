import { Profile, ServerResponse, ValidationError } from '../types';

export const mockPost = async (profile: Profile): Promise<ServerResponse> => {
  const errors: ValidationError[] = [];

    if (!profile.firstName) {
      errors.push({ path: "firstName", message: "Missing first name!" });
    }
    if (!profile.lastName) {
      errors.push({ path: "lastName", message: "Missing last name!" });
    }
    if (!profile.phoneNumber) {
      errors.push({ path: "phoneNumber", message: "Missing phone number!" });
    } else if (profile.phoneNumber.replace(/[^0-9]/g, "").length !== 8) {
      errors.push({
        path: "phoneNumber",
        message: "Phone number must be 8 digits"
      });
    }

    if (errors.length > 0) {
      return { errors };
    }

    return { profile };
  }; 