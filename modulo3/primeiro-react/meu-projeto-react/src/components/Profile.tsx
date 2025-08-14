interface ProfileProps {
    name: string;
    bio: string;
    location: string;
}

export default function Profile(props : ProfileProps) {
    const { name, bio, location } =  props
    return (
        <section id="profile">
            <h2>{name}</h2>
            <h2>{bio}</h2>
            <h2>Localização: {location}</h2>
        </section>
    )
}