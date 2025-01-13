import Image from 'next/image'
import { exploreData } from '@/constants'


export default function SmallCard() {

interface ExploreItem {
    img: string;
    location: string;
    distance: string;
}

    return (
        <>
            {exploreData.map((item: ExploreItem, index: number) => (
                <div key={index} className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 
                hover:scale-105 transition transform duration-200'>
                    {/* left */}
                    <div className='relative h-16 w-16 '>
                        <Image className='rounded-lg' src={item.img} alt={item.location} layout='fill' />
                    </div>
                    {/* right */}
                    <div>
                        <h2 className=''>{item.location}</h2>
                        <h3 className='text-sm text-neutral-500'>{item.distance}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(
        (res) => res.json()
    );

    const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(
        (res) => res.json()
    );
    return {
        props: {
            exploreData,
            cardsData,
        }
    }
}