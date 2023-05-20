import bcrypt from 'bcryptjs';

const encrypt = async passwordPlain => {
	const hashed = await bcrypt.hash(passwordPlain, 10);
	return hashed;
};

const comparePassword = async (passwordPlain, hashPassword) => {
	return await bcrypt.compare(passwordPlain, hashPassword);
};

export { comparePassword, encrypt };
