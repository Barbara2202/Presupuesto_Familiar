class Cl_mIntegrante 
{
    constructor(iM = 0, gM = 0)
    {
        this.ingresoMensual = 0;
        this.gastoFijoMensual = 0;
    };
    get ingresoMensual()
    {
        return this._ingresoMensual;
    };
    set ingresoMensual(iM)
    {
        this._ingresoMensual = iM;
    };
    get gastoFijoMensual()
    {
        return this._gastoFijoMensual;
    };
    set gastoFijoMensual(gM)
    {
        this._gastoFijoMensual = gM;
    };
    AporteMensual()
    {
        return (this.ingresoMensual - this.gastoFijoMensual);
    };
};

class Cl_mFamilia
{
    constructor()
    {
        this.montoTotalD = 0;
    };
    get montoTotalD()
    {
        return this._montoTotalD;
    };
    set montoTotalD(mD)
    {
        this._montoTotalD = parseFloat(mD);
    };
    ProcesarIntegrante(i)
    {
        this.montoTotalD += i.AporteMensual();
    };
};

class Cl_vFamilia
{
    reportar(montoTotalD)
    {
        consola_salida.innerHTML += `<br>MONTO TOTAL DISPONIBLE EN LA FAMILIA: ${montoTotalD}<br>`;
    };    
};

class Cl_vIntegrante
{
    reportar(i)
    {
        consola_salida.innerHTML +=
            `${String(i.ingresoMensual).padEnd(10, '.')}` +
            `${String(i.gastoFijoMensual.padStar(10, '.'))}` +
            `${String(i.AporteMensual.padStar(10, '.'))}<br>`
    };
};

class Cl_controler
{
    constructor()
    {
        this.mIntegrante = new Cl_mIntegrante();
        this.mFamilia = new Cl_mFamilia();
        this.vFamilia = new Cl_vFamilia();
        this.vIntegrante = new Cl_vIntegrante();
    };
    get mIntegrante()
    {
        return this._mIntegrante;
    };
    set mIntegrante(i)
    {
        this._mIntegrante = i;
    };
    get mFamilia()
    {
        return this._mFamilia;
    };
    set mFamilia(f)
    {
        this._mFamilia = f;
    };
    get vFamilia()
    {
        return this._vFamilia;
    };
    set vFamilia(f)
    {
        this._vFamilia = f;
    };
    get vIntegrante()
    {
        return this._vIntegrante;
    };
    set vIntegrante(i)
    {
        this._vIntegrante = i;
    };
    procesar1()
    {
        consola_salida.innerHTML = 
            'Ingreso Mensual        Gasto Fijo Mensual        Aporte Mensual<br>' +
            '===============================================================<br>'
        let integrante1 = new Cl_mVendedor(1000, 500, 500);
        let integrante2 = new Cl_mVendedor(750, 500, 250);
        let integrante3 = new Cl_mVendedor(250, 80, 170);
        let integrante4 = new Cl_mVendedor(50, 20, 30);
        this.mFamilia.ProcesarIntegrante(integrante1);
        this.vIntegrante.reportar(integrante1);
        this.mFamilia.ProcesarIntegrante(integrante2);
        this.vIntegrante.reportar(integrante2);
        this.mFamilia.ProcesarIntegrante(integrante3);
        this.vIntegrante.reportar(integrante3);
        this.mFamilia.ProcesarIntegrante(integrante4);
        this.vIntegrante.ProcesarIntegrante(integrante4);
        this.vFamilia.reportar(this.mFamilia.montoTotalD);
        consola_salida.innerHTML +=
            '===============================================================<br><br>'
        this.procesar2(); 
    };
    procesar2()
    {
        let procesar = confirm('¿Procesar datos manualmente?'),
            ingresoMensual = 0,
            gastoFijoMensual = 0
        if (procesar) 
        {
            this.mFamilia.montoTotalD = 0
            consola_salida.innerHTML +=
                'Ingreso Mensual        Gasto Fijo Mensual        Aporte Mensual<br>' +
                '===============================================================<br>'
            while (procesar)
            {
                this.mIntegrante.ingresoMensual = prompt('Indique su ingreso mensual');
                this.mIntegrante.gastoFijoMensual = prompt('Indique su gasto fijo mensual');
                this.mFamilia.ProcesarIntegrante(this.mIntegrante);
                this.vIntegrante.reportar(this.mIntegrante);
                procesar = confirm('¿Hay otro integrante?');
            };
            this.vFamilia.reportar(this.mFamilia.montoTotalD);
            consola_salida.innerHTML +=
                '===============================================================<br>'
        };
    };
};

var controler = new Cl_controler();