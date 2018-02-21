
var BANDS = {
    '800': '80000',
    '1800': '4',
    '800_1800' : '80004',
    '1800_2600' : '44',
    '2100' : '1'
};

function setLTEBand(band) {
    g_setting_netWork.NetworkMode = '3';
    g_setting_netWork.NetworkBand = '3FFFFFFF';
    g_setting_netWork.LTEBand = BANDS[band];
    setting_dialup_saveVar();
}