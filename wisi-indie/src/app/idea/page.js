import logoIdea from '../../assets/Home.png';
import Image from 'next/image';
const Idea = () => {
	return (
		<section className=' flex flex-col justify-center items-center gap-7'>
			<section className='max-w-3xl'>
				<div className='flex justify-between'>
					<p className='text-gradient'>#Idea 1</p>
					<p className='text-gradient'>Idea of LuisitoComunica</p>
				</div>
				<h3 className='text-blue-300 text-4xl font-black'>
					Now it&apos;s easier to start a new project
				</h3>
			</section>
			<section className='max-w-5xl flex gap-14'>
				<p className='text-white text-justify'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					eget mauris sit amet quam consequat aliquam. Vestibulum facilisis, mi
					eu sodales accumsan, turpis augue vestibulum lacus,non mattis lacus
					nulla a turpis. Etiam et elit in leo efficitur vestibulum. Vestibulum
					posuere sapien vitae eros dignissim, non condimentum lorem venenatis.
					Pellentesque ut lobortis lacus. Curabitur a porttitor metus, non
					ornare nisi. Sed molestie a massa porttitor sagittis. Nulla tellus
					turpis, tempus aliquam pretium ac, lobortis vitae risus. Maecenas
					vitae vehicula justo, et faucibus massa. In hac habitasse platea
					dictumst. Quisque at ipsum eu risus mollis interdum quis vel felis.
					Pellentesque interdum pretium orci ac hendrerit. Maecenas convallis
					sollicitudin hendrerit. Aenean varius justo augue, id convallis tortor
					sollicitudin nec. Vestibulum placerat rutrum urna eu eleifend. Nam
					mollis sem vel pulvinar aliquam. Donec consequat, justo nec lacinia
					dignissim,
				</p>
				<Image src={logoIdea} alt='project-logo' />
			</section>
		</section>
	);
};

export default Idea;
