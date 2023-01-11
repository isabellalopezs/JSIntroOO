class Cliente 
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente
{
    numero;
    saldo;
    agencia;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "Dobby";
cliente1.dniCliente = "123548"
cliente1.rutCliente = "111254793"

const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numero = "3214568723";
cuentaCorriente1.saldo = 4560;
cuentaCorriente1.agencia = "Roldanillo";

console.log(cliente1);
console.log(cuentaCorriente1);
