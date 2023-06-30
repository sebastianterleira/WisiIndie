import Image from 'next/image';

const ButtonOauth = ({ iconSrc, text }) => {
	return (
		<button className='group/edit  flex gap-4 item-center w-full px-3 py-3 rounded-md box-border text-black bg-white text-xs font-semibold outline outline-1 outline-gray-300 hover:bg-gray-100'>
			<span className='flex '>
				<Image
					src={iconSrc}
					width={20}
					height={20}
					alt={'Logo de la plataforma WisiIndie'}
				/>
			</span>
			<div className='w-full flex items-center text-sm font-normal'>
				<span>{text}</span>
			</div>
			<Image
				className='-translate-x-6 opacity-0  transition-all duration-400  group-hover/edit:translate-x-0  group-hover/edit:opacity-100'
				src='./images/ArrowRightIcon.svg'
				width={14}
				height={16}
				alt={'Icono de flecha para el boton de buttonOauth'}
			/>
		</button>
	);
};

export default ButtonOauth;
