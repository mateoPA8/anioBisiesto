function esBisiesto(anio){
    if(anio%4==0 && anio%100!=0)
    {
        return true;
    }
    if(anio%100==0 && anio%400!=0)
    {
        return false;
    }
    if(anio%400==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
export default esBisiesto;