import { BarChart, Bar, Cell, LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChart = () => {
    const students = [
        { "name": "Alice", "math": 85, "phy": 78, "chem": 90 },
        { "name": "Bob", "math": 78, "phy": 75, "chem": 85 },
        { "name": "Charlie", "math": 92, "phy": 88, "chem": 94 },
        { "name": "David", "math": 63, "phy": 70, "chem": 65 },
        { "name": "Emily", "math": 76, "phy": 82, "chem": 79 },
        { "name": "Frank", "math": 88, "phy": 90, "chem": 85 },
        { "name": "Grace", "math": 95, "phy": 96, "chem": 92 },
        { "name": "Hannah", "math": 72, "phy": 68, "chem": 75 },
        { "name": "Ian", "math": 81, "phy": 84, "chem": 80 },
        { "name": "Jessica", "math": 90, "phy": 92, "chem": 88 }
    ]

    return (
        <div>
            <LChart width={900} height={600} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line stroke='red' dataKey={'math'}></Line>
                <Line stroke='blue' dataKey={'phy'}></Line>
                <Line stroke='yellow' dataKey={'chem'}></Line>
            </LChart>

            <BarChart width={900} height={400} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="math" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default LineChart;