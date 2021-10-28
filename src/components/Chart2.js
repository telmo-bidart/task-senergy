import react from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import { usinaData } from './dadosUsina';

let chart2 = () => (
    <ResponsiveContainer width="100%" height={550}>
    <LineChart data={usinaData}
    margin={{top: 120, right:100, left: 100, bottom: 1}}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="tempo_h" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={55}/>
      <Line dataKey="corrente_A" activeDot={{ r: 4 }} name="Corrente(A)" dot={false}>

      </Line>
    </LineChart>
  </ResponsiveContainer>
)

export default chart2