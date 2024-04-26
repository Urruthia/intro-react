import Image from "next/image";
import Link from "next/link";

type Props = {
    id: string;
    src: string;
}

export default function CatCard({ id, src }: Props) {
    return (
        <div>
            <Image src={src} alt="Gato" width={300} height={300}/>
            <Link href={`/${id}`}>Ir al perfil</Link>
        </div>
    );
}