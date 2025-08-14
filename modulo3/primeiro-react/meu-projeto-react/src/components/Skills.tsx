import SkillItem from "./SkillItem";

interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section id="Skills">
            <h2>Habilidades</h2>

            {skills.length === 0 ? (
                <p>Nenhuma habilidade</p>
            ) : (
                <ul>
                    {skills.map((skill, index) => (
                        <SkillItem skill={skill} key={index} />
                    ))}
                </ul>
            )}
        </section>
    );
}
