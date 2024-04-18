export const setSession = async (usuario) => {
    localStorage.setItem('token', JSON.stringify(usuario));
};

export const getSession = () => {
    return JSON.parse(localStorage.getItem('token'));
};
export const getItemSession = (item) => {
    let usuario = JSON.parse(localStorage.getItem('token'));
    return usuario !== null ? usuario[item] : null;
};

export const clearSession = () => {
    localStorage.clear();
};

export const MainUrl = document.URL.match(/localhost*/)
    ? 'http://localhost:8080/Factura_Electronica/'
    : // : document.URL.match(/10.10.12.84.*/)
    document.URL.match(/10.10.12.84.*/)
    ? // ? "http://10.10.12.84:8080/Factura_Electronica/"
      'http://10.10.12.84:8080/Factura_Electronica/'
    : 'https://facte.siga.com.py/FacturaE/';
