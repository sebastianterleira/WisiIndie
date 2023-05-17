const Input = ({ type, name, placeholder, label }) => {
	return (
		<div className='flex flex-col gap-1'>
			<label className='text-sm font-medium text-black/80'>{label}</label>
			<input
				className='py-2 px-4 outline outline-1 outline-gray-500 rounded-md focus:outline-2 text-sm font-light'
				type={type}
				name={name}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
