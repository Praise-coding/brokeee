import bcrypt from "bcryptjs"; // Instead of "bcrypt"


export const hashPassword = async (plainPassword: string) => {
    const saltRounds = 10; // Controls hashing complexity
    return bcrypt.hash(plainPassword, saltRounds);
};
