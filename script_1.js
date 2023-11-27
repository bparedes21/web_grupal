const jsonfile = {
    "jsonarray": [
        {
            "observation_date": "2022-06-01",
            "FLUR": 2.8
           },
           {
            "observation_date": "2022-07-01",
            "FLUR": 2.7
           },
           {
            "observation_date": "2022-08-01",
            "FLUR": 2.7
           },
           {
            "observation_date": "2022-09-01",
            "FLUR": 2.7
           },
           {
            "observation_date": "2022-10-01",
            "FLUR": 2.7
           },
           {
            "observation_date": "2022-11-01",
            "FLUR": 2.7
           },
           {
            "observation_date": "2022-12-01",
            "FLUR": 2.7
           }
       ]
 };


 const jsonfile1_nebr = {
    "jsonarray":[
        {
            "observation_date": "2022-06-01",
            "NEUR": 2.2
           },
           {
            "observation_date": "2022-07-01",
            "NEUR": 2.4
           },
           {
            "observation_date": "2022-08-01",
            "NEUR": 2.6
           },
           {
            "observation_date": "2022-09-01",
            "NEUR": 2.6
           },
           {
            "observation_date": "2022-10-01",
            "NEUR": 2.7
           },
           {
            "observation_date": "2022-11-01",
            "NEUR": 2.7
           },
           {
            "observation_date": "2022-12-01",
            "NEUR": 2.7
           }]

};



const values_dataunemployment = jsonfile.jsonarray.map(function(e) {
    return e.FLUR;
});



const labels_fechas = jsonfile.jsonarray.map(function(e) {
    return e.observation_date; 
});



const values_dataunemployment_Nebraska = jsonfile1_nebr.jsonarray.map(function(e) {
    return e.NEUR;
});

const labels_fechas_nebraska = jsonfile1_nebr.jsonarray.map(function(e) {
    return e.observation_date; 
});



const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');
const config = {
    type: 'bar',
    data: {
        labels: labels_fechas,
        datasets: [{
            label: 'Florida',
            data: values_dataunemployment,
            borderColor: "rgba(0,0,255,0.8)",
            backgroundColor:"rgba(0,0,255,0.5)", // Color del borde
            borderWidth: 0.5,// Ancho del borde
        }, {
            label: 'Nebraska',
            data: values_dataunemployment_Nebraska,
            borderColor: "rgba(255, 195, 0 )",
            backgroundColor:"rgba(255, 195, 0 )",
            borderWidth: 0.5// Ancho del borde
        }
     
    ]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                },
                title: {
                    display: true,
                    text: 'Fecha'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Desempleo'
                }
            }
        }
    }
};
const myChart = new Chart(ctx, config);

const jsonfile_rental_nebraska = {
    "jsonarray":[
        {
         "observation_date": "2020-01-01",
         "NERVAC": 6.5
        },
        {
         "observation_date": "2021-01-01",
         "NERVAC": 5.7
        },
        {
         "observation_date": "2022-01-01",
         "NERVAC": 5.2
        }
       ]
};

const jsonfile_rental_florida = {
    "jsonarray":[
        {
         "observation_date": "2020-01-01",
         "FLRVAC": 7.3
        },
        {
         "observation_date": "2021-01-01",
         "FLRVAC": 6.5
        },
        {
         "observation_date": "2022-01-01",
         "FLRVAC": 7.2
        }
       ]
};



const values_rental_florida = jsonfile_rental_florida.jsonarray.map(function(e) {
    return e.FLRVAC;
});

const values_rental_nebraska = jsonfile_rental_nebraska.jsonarray.map(function(e) {
    return e.NERVAC; 
});

const labels_fechas2= jsonfile_rental_florida.jsonarray.map(function(e) {
    return e.observation_date; 
});

const canvas1 = document.getElementById('myChart1');
const ctx1 = canvas1.getContext('2d'); // Corregido aquí
const config_1 = {
    type: 'line',
    data: {
        labels: labels_fechas2,
        datasets: [{
            label: 'Viviendas sin rentar en Florida',
            data: values_rental_florida,
            backgroundColor: 'rgba(255, 255, 255 )', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 1// Ancho del borde
        }, {
            label: 'Viviendas sin rentar en Nebraska',
            data: values_rental_nebraska,
            backgroundColor: 'rgba(255, 255, 255 )',// Color de fondo
            borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
            borderWidth: 1// Ancho del borde
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                },
                title: {
                    display: true,
                    text: 'Fecha'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Desempleo'
                }
            }
        }
    }
};

const myChart1 = new Chart(ctx1, config_1);


const jsonfile_Homeownership_Rate_for_Nebraska = {
"jsonarray":[
    {
     "observation_date": "2018-01-01",
     "NEHOWN": 66.4
    },
    {
     "observation_date": "2019-01-01",
     "NEHOWN": 68.2
    },
    {
     "observation_date": "2020-01-01",
     "NEHOWN": 69.8
    },
    {
     "observation_date": "2021-01-01",
     "NEHOWN": 68.4
    },
    {
     "observation_date": "2022-01-01",
     "NEHOWN": 69
    }
   ]};

const jsonfile_Homeownership_Rate_for_florida = {
"jsonarray":[
    {
     "observation_date": "2018-01-01",
     "FLHOWN": 65.5
    },
    {
     "observation_date": "2019-01-01",
     "FLHOWN": 66
    },
    {
     "observation_date": "2020-01-01",
     "FLHOWN": 68.7
    },
    {
     "observation_date": "2021-01-01",
     "FLHOWN": 67.2
    },
    {
     "observation_date": "2022-01-01",
     "FLHOWN": 67.3
    }
   ]};

   

const values_Homeownership_florida = jsonfile_Homeownership_Rate_for_florida.jsonarray.map(function(e) {
    return e.FLHOWN;
});

const values_Homeownership_nebraska = jsonfile_Homeownership_Rate_for_Nebraska.jsonarray.map(function(e) {
    return e.NEHOWN; 
});

const labels_fechas3= jsonfile_Homeownership_Rate_for_Nebraska.jsonarray.map(function(e) {
    return e.observation_date; 
});

const canvas2 = document.getElementById('myChart2');
const ctx2 = canvas2.getContext('2d');

const config_2 = {
    type: 'line',
    data: {
        labels: labels_fechas3,
        datasets: [{
            label: 'Tasa de Propietarios en Florida',
            data: values_Homeownership_florida,
            backgroundColor: 'rgba(255, 255, 255 )',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Tasa de Propietarios en Nebraska',
            data: values_Homeownership_nebraska,
            backgroundColor: 'rgba(255, 255, 255 )',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                },
                title: {
                    display: true,
                    text: 'Fecha'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Propietarios'
                }
            }
        }
    }
};

const myChart2 = new Chart(ctx2, config_2);

const jsonfile__resident_population_nebraska = {    "jsonarray":
[
    {
     "observation_date": "2018-01-01",
     "NEPOP": 1925.512
    },
    {
     "observation_date": "2019-01-01",
     "NEPOP": 1932.571
    },
    {
     "observation_date": "2020-01-01",
     "NEPOP": 1962.642
    },
    {
     "observation_date": "2021-01-01",
     "NEPOP": 1963.554
    },
    {
     "observation_date": "2022-01-01",
     "NEPOP": 1967.923
    }
   ]

};


const jsonfile_resident_population_florida = {
    "jsonarray":[
        {
         "observation_date": "2018-01-01",
         "FLPOP": 21254.926
        },
        {
         "observation_date": "2019-01-01",
         "FLPOP": 21492.056
        },
        {
         "observation_date": "2020-01-01",
         "FLPOP": 21589.602
        },
        {
         "observation_date": "2021-01-01",
         "FLPOP": 21828.069
        },
        {
         "observation_date": "2022-01-01",
         "FLPOP": 22244.823
        }
       ]
};


const labels_fechas4 = jsonfile__resident_population_nebraska.jsonarray.map(function(e) {
return e.observation_date; 
});

const resident_population_florida = jsonfile_resident_population_florida.jsonarray.map(function(e) {
    return e.FLPOP;
});

    const resident_population_nebraska= jsonfile__resident_population_nebraska.jsonarray.map(function(e) {
    return e.NEPOP; 
});

const canvas3 = document.getElementById('myChart3');
const ctx3 = canvas3.getContext('2d');

const config_3 = {
    type: 'line',
    data: {
        labels: labels_fechas4,
        datasets: [{
            label: 'Poblacion residente en Florida',
            data: resident_population_florida,
            backgroundColor: '#7091af', // Color de fondo
            borderColor: '#0c1d2a', // Color del borde
            borderWidth: 1// Ancho del borde
        }, {
            label: 'Poblacion residente en Nebraska',
            data: resident_population_nebraska,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
            borderColor: '#ffa500',// Color del borde
            borderWidth: 3// Ancho del borde
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                },
                title: {
                    display: true,
                    text: 'Fecha'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Propietarios'
                }
            }
        }
    }
};

const myChart3 = new Chart(ctx3, config_3);
    