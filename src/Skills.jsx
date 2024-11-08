

const skillsData = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Tailwind', level: 70 },
];

const Skills = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
            {skillsData.map((skill) => (
                <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
