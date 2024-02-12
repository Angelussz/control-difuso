/* 
[Output1]
Name='TiempoRiego'
Range=[0 255]
NumMFs=2
MF1='Apagado':'zmf',[45 100]
MF2='Regado':'smf',[60 175]
*/

// Riego
export const riego = [
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
  175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
  205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
  235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249,
  250, 251, 252, 253, 254, 255,
];
export const riegoApagado = [
  1.0, 0.9977777777777778, 0.9911111111111112, 0.98, 0.9644444444444444,
  0.9444444444444444, 0.9199999999999999, 0.8911111111111111,
  0.8577777777777778, 0.8200000000000001, 0.7777777777777778,
  0.7311111111111112, 0.6799999999999999, 0.6244444444444444,
  0.5644444444444444, 0.5, 0.4355555555555556, 0.3755555555555556,
  0.32000000000000006, 0.26888888888888884, 0.2222222222222222, 0.18,
  0.14222222222222222, 0.1088888888888889, 0.08000000000000002,
  0.05555555555555555, 0.035555555555555556, 0.020000000000000004,
  0.008888888888888889, 0.0022222222222222222, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
];

export const riegoPrendido = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0006611570247933884,
  0.0026446280991735535, 0.0059504132231404955, 0.010578512396694214,
  0.01652892561983471, 0.023801652892561982, 0.03239669421487602,
  0.042314049586776856, 0.053553719008264465, 0.06611570247933884,
  0.08000000000000002, 0.09520661157024793, 0.11173553719008264,
  0.1295867768595041, 0.14876033057851237, 0.16925619834710742,
  0.19107438016528924, 0.21421487603305786, 0.23867768595041322,
  0.2644628099173554, 0.2915702479338843, 0.32000000000000006,
  0.3497520661157024, 0.3808264462809917, 0.4132231404958677,
  0.44694214876033056, 0.48198347107438017, 0.5180165289256198,
  0.5530578512396694, 0.5867768595041323, 0.6191735537190083,
  0.6502479338842976, 0.6799999999999999, 0.7084297520661157,
  0.7355371900826446, 0.7613223140495868, 0.7857851239669421,
  0.8089256198347108, 0.8307438016528925, 0.8512396694214877, 0.870413223140496,
  0.8882644628099173, 0.9047933884297521, 0.9199999999999999,
  0.9338842975206612, 0.9464462809917356, 0.9576859504132231, 0.967603305785124,
  0.976198347107438, 0.9834710743801653, 0.9894214876033058, 0.9940495867768595,
  0.9973553719008265, 0.9993388429752066, 1.0,
];

export const riegoGoteo = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4,
  0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0, 1.0, 1.0,
  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
  1.0, 1.0, 1.0, 0.967, 0.933, 0.9, 0.867, 0.833, 0.8, 0.767, 0.733, 0.7, 0.667,
  0.633, 0.6, 0.567, 0.533, 0.5, 0.467, 0.433, 0.4, 0.367, 0.333, 0.3, 0.267,
  0.233, 0.2, 0.167, 0.133, 0.1, 0.067, 0.033, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
];
