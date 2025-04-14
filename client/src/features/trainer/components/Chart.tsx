import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

// Mock data for the pie chart
const traineesData = [
  { name: "Passed", value: 35, color: "#5BF16F" },
  { name: "Failed", value: 8, color: "#FF5757" },
  { name: "In Progress", value: 15, color: "#F1E05B" },
];

const totalTrainees = traineesData.reduce((acc, item) => acc + item.value, 0);

const renderCustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="space-y-2">
      {payload.map((entry: any, index: number) => (
        <li
          key={`item-${index}`}
          className="flex items-center gap-2 text-base font-medium"
        >
          <span
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="text-gray-800 text-lg">{entry.value}</span>
          <span className="text-gray-600">{entry.name}</span>
        </li>
      ))}
    </ul>
  );
};

export const Chart = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm flex justify-center items-center relative">
      <div className="flex items-center justify-between mb-4">
        <div className="h-[500px] w-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={traineesData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={150}
                paddingAngle={0}
                dataKey="value"
                labelLine={false}
              >
                {traineesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend content={renderCustomLegend} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute right-12 top-12 text-xl font-bold">
          Total Trainee : {totalTrainees}
        </div>
      </div>
    </div>
  );
};
