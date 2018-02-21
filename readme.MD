## Forcing LTE band on your LTE router ;) 
- login to your router console (usually 192.168.1.1)
- login as admin
- open the JavaScript console
- execute the commands from the JS console

#### Display current network settings:
`g_setting_netWork` will printout the current setup, like:

```
   {NetworkMode: 3, NetworkBand: "3FFFFFFF", LTEBand: "44"}
```

where:
- NetworkMode: 3 - I don't know yet ;), probably connected or something
- NetworkBand: BTS band to use - 3FFFFFFF is probably LTE
- LTEBand: LTE band to use:
    - `80000` is LTE 800
    - `4` is LTE 1800
    - `80004` is LTE 800 + 1800 aggregated
    - `44` is LTE 1800 + 2600 aggregated 
    - `1` is LTE 2100
    
to setup the desired mode, introduce the following function in the console:

```
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

```

and then juest execute, for example:

```
setLTEBand('800_1800')
```

* Note that you will be reconnected on your current BTS. Enjoy.