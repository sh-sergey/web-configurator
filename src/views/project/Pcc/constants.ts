export const CELL_SIZE = 16;
export const ROWS = 112;
export const COLS = 88;

export const STROKE_WIDTH = 2;
export const STROKE_COLOR = '#000';

export const initialSchemaCode = `[
    {
        "type": "input-block",
        "name": "input_osc32m",
        "col": 2,
        "row": 6,
        "width": 8,
        "height": 4,
        "value": "32",
        "connectionLeft": "none",
        "connectionRight": "bidirectional",
        "prefix": "Входная частота",
        "postfix": "до 32 МГц",
        "editable": true
    },
    {
        "type": "input-block",
        "name": "osc32m",
        "col": 10,
        "row": 6,
        "width": 10,
        "height": 4,
        "value": "OSC32M",
        "connectionLeft": "biline",
        "connectionRight": "line",
        "postfix": "32 МГц",
        "postfixAlign": "center"
    },
    {
        "type": "input-block",
        "name": "hsi",
        "col": 12,
        "row": 16,
        "width": 8,
        "height": 4,
        "value": "32",
        "connectionLeft": "none",
        "connectionRight": "line",
        "prefix": "HSI",
        "postfix": "32 МГц",
        "prefixAlign": "center",
        "postfixAlign": "center",
        "editable": true
    },
    {
        "type": "input-block",
        "name": "lsi",
        "col": 12,
        "row": 24,
        "width": 8,
        "height": 4,
        "value": "32",
        "connectionLeft": "none",
        "connectionRight": "line",
        "prefix": "LSI",
        "postfix": "32 кГц",
        "prefixAlign": "center",
        "postfixAlign": "center",
        "editable": true
    },
    {
        "type": "input-block",
        "name": "osc32k",
        "col": 10,
        "row": 34,
        "width": 10,
        "height": 4,
        "value": "OSC32K",
        "connectionLeft": "biline",
        "connectionRight": "line",
        "postfix": "32 кГц",
        "postfixAlign": "center"
    },
    {
        "type": "input-block",
        "name": "osc32k_freq_in",
        "col": 2,
        "row": 34,
        "width": 8,
        "height": 4,
        "value": "32.768",
        "connectionLeft": "none",
        "connectionRight": "bidirectional",
        "prefix": "Входная частота",
        "postfix": "до 32 кГц",
        "editable": true
    },
    {
        "type": "input-block",
        "name": "rtc_freq",
        "col": 32,
        "row": 25,
        "width": 8,
        "height": 4,
        "value": "32",
        "connectionLeft": "right",
        "connectionRight": "none",
        "postfix": "к RTC (кГц)",
        "postfixAlign": "center"
    },
    {
        "type": "input-block",
        "name": "mon_freq",
        "col": 32,
        "row": 33,
        "width": 8,
        "height": 4,
        "value": "32",
        "connectionLeft": "right",
        "connectionRight": "none",
        "postfix": "к монитору частоты (кГц)",
        "postfixAlign": "center"
    },
    {
        "name": "mux_sys_clk",
        "type": "multiplexor",
        "col": 46,
        "row": 6,
        "width": 8,
        "height": 10,
        "prefix": "Мультиплексор частоты системы",
        "pins": [
            {
                "code": "1",
                "isActive": true,
                "name": "OSC32M"
            },
            {
                "code": "2",
                "isActive": false,
                "name": "HSI"
            },
            {
                "code": "3",
                "isActive": false,
                "name": "LSI"
            },
            {
                "code": "4",
                "isActive": true,
                "name": "OSC32K"
            }
        ]
    },
    {
        "name": "mux_rtc_clk",
        "type": "multiplexor",
        "col": 24,
        "row": 24,
        "width": 8,
        "height": 6,
        "prefix": "Мультиплексор частоты RTC",
        "pins": [
            {
                "code": "1",
                "isActive": true,
                "name": "LSI"
            },
            {
                "code": "2",
                "isActive": false,
                "name": "OSC32K"
            }
        ]
    },
    {
        "name": "mux_mon_clk",
        "type": "multiplexor",
        "col": 24,
        "row": 32,
        "width": 8,
        "height": 6,
        "prefix": "Мультиплексор монитора частоты",
        "pins": [
            {
                "code": "1",
                "isActive": true,
                "name": "LSI"
            },
            {
                "code": "2",
                "isActive": false,
                "name": "OSC32K"
            }
        ]
    },
    {
        "name": "mux_wdt_clk",
        "type": "multiplexor",
        "col": 46,
        "row": 20,
        "width": 8,
        "height": 10,
        "prefix": "Мультиплексор частоты WDT",
        "pins": [
            {
                "code": "1",
                "isActive": true,
                "name": "OSC32M"
            },
            {
                "code": "2",
                "isActive": false,
                "name": "HSI"
            },
            {
                "code": "3",
                "isActive": false,
                "name": "LSI"
            },
            {
                "code": "4",
                "isActive": true,
                "name": "OSC32K"
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire0",
        "points": [
            {
                "col": 10,
                "row": 2
            },
            {
                "col": 10,
                "row": 68
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire1",
        "points": [
            {
                "col": 48,
                "row": 8
            },
            {
                "col": 18,
                "row": 8
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire2",
        "points": [
            {
                "col": 18,
                "row": 36
            },
            {
                "col": 22,
                "row": 36
            },
            {
                "col": 22,
                "row": 40
            },
            {
                "col": 46,
                "row": 40
            },
            {
                "col": 46,
                "row": 14
            },
            {
                "col": 48,
                "row": 14
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire3",
        "points": [
            {
                "col": 18,
                "row": 26
            },
            {
                "col": 20,
                "row": 26
            },
            {
                "col": 20,
                "row": 20
            },
            {
                "col": 44,
                "row": 20
            },
            {
                "col": 44,
                "row": 12
            },
            {
                "col": 48,
                "row": 12
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire4",
        "points": [
            {
                "col": 18,
                "row": 18
            },
            {
                "col": 42,
                "row": 18
            },
            {
                "col": 42,
                "row": 10
            },
            {
                "col": 48,
                "row": 10
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire5",
        "points": [
            {
                "col": 18,
                "row": 26
            },
            {
                "col": 20,
                "row": 26
            },
            {
                "col": 20,
                "row": 20
            },
            {
                "col": 44,
                "row": 20
            },
            {
                "col": 44,
                "row": 26
            },
            {
                "col": 48,
                "row": 26
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire6",
        "points": [
            {
                "col": 18,
                "row": 18
            },
            {
                "col": 42,
                "row": 18
            },
            {
                "col": 42,
                "row": 24
            },
            {
                "col": 48,
                "row": 24
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire7",
        "points": [
            {
                "col": 18,
                "row": 26
            },
            {
                "col": 26,
                "row": 26
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire8",
        "points": [
            {
                "col": 18,
                "row": 26
            },
            {
                "col": 20,
                "row": 26
            },
            {
                "col": 20,
                "row": 34
            },
            {
                "col": 26,
                "row": 34
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire9",
        "points": [
            {
                "col": 18,
                "row": 36
            },
            {
                "col": 22,
                "row": 36
            },
            {
                "col": 22,
                "row": 28
            },
            {
                "col": 26,
                "row": 28
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire9",
        "points": [
            {
                "col": 18,
                "row": 36
            },
            {
                "col": 26,
                "row": 36
            }
        ]
    },
    {
        "type": "wire",
        "name": "wire10",
        "points": [
            {
                "col": 18,
                "row": 8
            },
            {
                "col": 40,
                "row": 8
            },
            {
                "col": 40,
                "row": 22
            },
            {
                "col": 48,
                "row": 22
            }
        ]
    },
    {
        "type": "intersection",
        "name": "int0",
        "col": 42,
        "row": 18,
        "width": 1,
        "height": 1
    },
    {
        "type": "intersection",
        "name": "int1",
        "col": 44,
        "row": 20,
        "width": 1,
        "height": 1
    },
    {
        "type": "intersection",
        "name": "int2",
        "col": 46,
        "row": 28,
        "width": 1,
        "height": 1
    },
    {
        "type": "intersection",
        "name": "int3",
        "col": 40,
        "row": 8,
        "width": 1,
        "height": 1
    },
    {
        "type": "intersection",
        "name": "int4",
        "col": 20,
        "row": 26,
        "width": 1,
        "height": 1
    },
    {
        "type": "intersection",
        "name": "int5",
        "col": 22,
        "row": 36,
        "width": 1,
        "height": 1
    }
]`;
