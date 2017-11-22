// ==UserScript==
// @name        Quitar Viralez
// @namespace   Fix something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     https://www.youtube.com/watch?v=*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==


var $is = jQuery.noConflict();
function delViralez() {
$is( '.yt-uix-sessionlink.content-link.spf-link.spf-link' ).each(function() {
  $is('[href*="gwPHcw__urY"],[href*="fG4AhTaZej4"],[href*="Mvo091_tSGM"],[href*="2tayi8zQlG4"],[href*="C3t4lrzbyUc"],[href*="DBAVf-rYBTY"],[href*="7-3S6DXl0yI"],[href*="Z2A7OvI1bIo"],[href*="QpBWyZu6zWg"],[href*="1JRc-gkz6FI"],[href*="SKDPZSAQfJI"],[href*="BjCGMy9Qh0c"],[href*="e9c9z0hyfzI"],[href*="aZYe3_b2qys"],[href*="yBrhjU5t6Gg"],[href*="a5-3A8z8XKI"],[href*="DfJFPKko_GA"],[href*="ekeYD7pJgl0"],[href*="ojfhd83Lc-k"],[href*="Jbay7k8bqsk"],[href*="65Ig6iuHn8k"],[href*="PpXCnZlIVVo"],[href*="VxvDVhjALoU"],[href*="PpXCnZlIVVo"],[href*="VxvDVhjALoU"],[href*="vU_0ITeDEmg"],[href*="y6_MRhbeppI"],[href*="eYPaYwL0ktg"],[href*="QWCuhR8sM38"],[href*="cSaC-gofxHk"],[href*="wozTHxykDwQ"],[href*="1E6wyvgEZnA"],[href*="WQzAXQC4QVc"],[href*="LtrmkJlUhos"],[href*="hyNpWhfa1VM"],[href*="tntOCGkgt98"],[href*="RQP0-yCsddk"],[href*="sxv-vbtOny8"],[href*="Ujwod-vqyqA"],[href*="V4LnorVVxfw"],[href*="M82wF72RAAw"],[href*="6-SfjPGTu8s"],[href*="SPFtsX8pwDg"],[href*="iQBWFbDz9JI"],[href*="3ZqPaohVjmw"],[href*="yWqG8ysc3BE"],[href*="XLOFhbM1SMY"],[href*="BtpMTb1gR9w"],[href*="I17gKl6suWI"],[href*="VOJR70K0Ok8"],[href*="cOLwe9Fe3lo"],[href*="0KcEwh_noEg"],[href*="rA5pkTlzPfE"],[href*="GxbDuyJ4o6s"],[href*="JAtQSQJuWBQ"],[href*="yWfetF1jCO4"],[href*="Hw0r6K4Z-vs"],[href*="fuXARb_ZrO0"],[href*="P-5pPEq7O4k"],[href*="xlSFenzYOvQ"],[href*="IdLHAqL8KJw"],[href*="OLfOVbmSKoo"],[href*="FCZB-k4jKBc"],[href*="IPiOsACgs-U"],[href*="RuM8o1sdjzg"],[href*="kzlg3oQMze4"],[href*="qU3SG_6AyjQ"],[href*="6Vzo9gLAGnA"],[href*="preq8JSu0I4"],[href*="95qvMQU0etw"],[href*="f1Mbs6g9XTA"],[href*="qU3SG_6AyjQ"],[href*="ZmPuaz_cTw8"],[href*="jIL0ze6_GIY"],[href*="K2cRvoDoGBA"],[href*="57q6TUMTS_M"],[href*="mERAaeCrj0E"],[href*="eJGRFwLUWL0"],[href*="NfHdu7oX5LU"],[href*="AYo72E7ZMHM"],[href*="IyPmb1FXxzM"],[href*="RlpPsQaH2GQ"],[href*="mUNWJLdM84g"],[href*="mUNWJLdM84g"],[href*="uMBXhDcogcI"],[href*="d3RuGQluDXs"],[href*="V5iMcfGnIqo"],[href*="rEso2Q4zdJQ"],[href*="7mgPOEPQBOY"],[href*="L08tG2Jh9Yw"],[href*="WbEGteWzE0Q"],[href*="W2CsJY27xQU"],[href*="AQxsVBQwYS8"],[href*="ZJ91qt7-brU"],[href*="42t7e1-UL7w"],[href*="9wCPUUIjjdU"],[href*="xAEaA31EdtU"],[href*="icBXcvCZfGs"],[href*="0qv1nDWN_Rk"],[href*="RMYCrWms7y4"],[href*="W31937Puv1k"],[href*="37BC9p3P4YE"],[href*="xBfIskNSWFo"],[href*="xwXq9SeBi9k"],[href*="LzubQO2fOvA"],[href*="Kc6By-4NvZA"],[href*="ZlOsu870j8E"],[href*="7uIbEdpmdLI"],[href*="2XV2bVamPCI"],[href*="4tzhyfWHdLo"],[href*="Ojoh2ZNaGk8"],[href*="u82ptblJvog"],[href*="mhnt2JFUvjY"],[href*="Lm3i2m-v4xY"],[href*="Mvo091_tSGM"],[href*="5qNhkw_Ah4U"],[href*="4p0DsVPkyZg"],[href*="N3WUaMWKM2Q"],[href*="BQ2pHDId9xk"],[href*="OYwcoa_Aj5Y"],[href*="ywCbUHBwFvM"],[href*="Oh0J7DppmHI"],[href*="TQUweTSLcB4"],[href*="KIjHk4RhF8g"],[href*="HpXAPLX5m9c"],[href*="7iCnMjN6kxs"],[href*="_2dxLtdfcvM"],[href*="QkIUbHB5rcE"],[href*="qUBAtQ3z1ok"],[href*="ZkvzReIX-Ws"],[href*="EC7eKmaDmGA"],[href*="J8v-nOvKaTQ"],[href*="ywCbUHBwFvM"],[href*="vaHsYU9vlMs"],[href*="wK4TkiZhymM"],[href*="mfRX44N4oUw"],[href*="12x6hCKnwkI"],[href*="DWRXTw9AJAA"],[href*="YQHsXMglC9A"],[href*="8S-DMr28s8g"]').parent().parent().remove();
/*
$is('[href*="fG4AhTaZej4"]').parent().parent().remove();
$is('[href*="Mvo091_tSGM"]').parent().parent().remove();
$is('[href*="2tayi8zQlG4"]').parent().parent().remove();
$is('[href*="C3t4lrzbyUc"]').parent().parent().remove();
$is('[href*="DBAVf-rYBTY"]').parent().parent().remove();
$is('[href*="7-3S6DXl0yI"]').parent().parent().remove();
$is('[href*="Z2A7OvI1bIo"]').parent().parent().remove();
$is('[href*="QpBWyZu6zWg"]').parent().parent().remove();
$is('[href*="1JRc-gkz6FI"]').parent().parent().remove();
$is('[href*="SKDPZSAQfJI"]').parent().parent().remove();
$is('[href*="BjCGMy9Qh0c"]').parent().parent().remove();
$is('[href*="e9c9z0hyfzI"]').parent().parent().remove();
$is('[href*="aZYe3_b2qys"]').parent().parent().remove();
$is('[href*="yBrhjU5t6Gg"]').parent().parent().remove();
$is('[href*="a5-3A8z8XKI"]').parent().parent().remove();
$is('[href*="DfJFPKko_GA"]').parent().parent().remove();
$is('[href*="ekeYD7pJgl0"]').parent().parent().remove();
$is('[href*="ojfhd83Lc-k"]').parent().parent().remove();
$is('[href*="Jbay7k8bqsk"]').parent().parent().remove();
$is('[href*="65Ig6iuHn8k"]').parent().parent().remove();
$is('[href*="PpXCnZlIVVo"]').parent().parent().remove();
$is('[href*="VxvDVhjALoU"]').parent().parent().remove();
$is('[href*="PpXCnZlIVVo"]').parent().parent().remove();
$is('[href*="VxvDVhjALoU"]').parent().parent().remove();
$is('[href*="vU_0ITeDEmg"]').parent().parent().remove();
$is('[href*="y6_MRhbeppI"]').parent().parent().remove();
$is('[href*="eYPaYwL0ktg"]').parent().parent().remove();
$is('[href*="QWCuhR8sM38"]').parent().parent().remove();
$is('[href*="cSaC-gofxHk"]').parent().parent().remove();
$is('[href*="wozTHxykDwQ"]').parent().parent().remove();
$is('[href*="1E6wyvgEZnA"]').parent().parent().remove();
$is('[href*="WQzAXQC4QVc"]').parent().parent().remove();
$is('[href*="LtrmkJlUhos"]').parent().parent().remove();
$is('[href*="hyNpWhfa1VM"]').parent().parent().remove();
$is('[href*="tntOCGkgt98"]').parent().parent().remove();
$is('[href*="RQP0-yCsddk"]').parent().parent().remove();
$is('[href*="sxv-vbtOny8"]').parent().parent().remove();
$is('[href*="Ujwod-vqyqA"]').parent().parent().remove();
$is('[href*="V4LnorVVxfw"]').parent().parent().remove();
$is('[href*="M82wF72RAAw"]').parent().parent().remove();
$is('[href*="6-SfjPGTu8s"]').parent().parent().remove();
$is('[href*="SPFtsX8pwDg"]').parent().parent().remove();
$is('[href*="iQBWFbDz9JI"]').parent().parent().remove();
$is('[href*="3ZqPaohVjmw"]').parent().parent().remove();
$is('[href*="yWqG8ysc3BE"]').parent().parent().remove();
$is('[href*="XLOFhbM1SMY"]').parent().parent().remove();
$is('[href*="BtpMTb1gR9w"]').parent().parent().remove();
$is('[href*="I17gKl6suWI"]').parent().parent().remove();
$is('[href*="VOJR70K0Ok8"]').parent().parent().remove();
$is('[href*="cOLwe9Fe3lo"]').parent().parent().remove();
$is('[href*="0KcEwh_noEg"]').parent().parent().remove();
$is('[href*="rA5pkTlzPfE"]').parent().parent().remove();
$is('[href*="GxbDuyJ4o6s"]').parent().parent().remove();
$is('[href*="JAtQSQJuWBQ"]').parent().parent().remove();
$is('[href*="yWfetF1jCO4"]').parent().parent().remove();
$is('[href*="Hw0r6K4Z-vs"]').parent().parent().remove();
$is('[href*="fuXARb_ZrO0"]').parent().parent().remove();
$is('[href*="P-5pPEq7O4k"]').parent().parent().remove();
$is('[href*="xlSFenzYOvQ"]').parent().parent().remove();
$is('[href*="IdLHAqL8KJw"]').parent().parent().remove();
$is('[href*="OLfOVbmSKoo"]').parent().parent().remove();
$is('[href*="FCZB-k4jKBc"]').parent().parent().remove();
$is('[href*="IPiOsACgs-U"]').parent().parent().remove();
$is('[href*="RuM8o1sdjzg"]').parent().parent().remove();
$is('[href*="kzlg3oQMze4"]').parent().parent().remove();
$is('[href*="qU3SG_6AyjQ"]').parent().parent().remove();
$is('[href*="6Vzo9gLAGnA"]').parent().parent().remove();
$is('[href*="preq8JSu0I4"]').parent().parent().remove();
$is('[href*="95qvMQU0etw"]').parent().parent().remove();
$is('[href*="f1Mbs6g9XTA"]').parent().parent().remove();
$is('[href*="qU3SG_6AyjQ"]').parent().parent().remove();
$is('[href*="ZmPuaz_cTw8"]').parent().parent().remove();
$is('[href*="jIL0ze6_GIY"]').parent().parent().remove();
$is('[href*="K2cRvoDoGBA"]').parent().parent().remove();
$is('[href*="57q6TUMTS_M"]').parent().parent().remove();
$is('[href*="mERAaeCrj0E"]').parent().parent().remove();
$is('[href*="eJGRFwLUWL0"]').parent().parent().remove();
$is('[href*="NfHdu7oX5LU"]').parent().parent().remove();
$is('[href*="AYo72E7ZMHM"]').parent().parent().remove();
$is('[href*="IyPmb1FXxzM"]').parent().parent().remove();
$is('[href*="RlpPsQaH2GQ"]').parent().parent().remove();
$is('[href*="mUNWJLdM84g"]').parent().parent().remove();
$is('[href*="mUNWJLdM84g"]').parent().parent().remove();
$is('[href*="uMBXhDcogcI"]').parent().parent().remove();
$is('[href*="d3RuGQluDXs"]').parent().parent().remove();
$is('[href*="V5iMcfGnIqo"]').parent().parent().remove();
$is('[href*="rEso2Q4zdJQ"]').parent().parent().remove();
$is('[href*="7mgPOEPQBOY"]').parent().parent().remove();
$is('[href*="L08tG2Jh9Yw"]').parent().parent().remove();
$is('[href*="WbEGteWzE0Q"]').parent().parent().remove();
$is('[href*="W2CsJY27xQU"]').parent().parent().remove();
$is('[href*="AQxsVBQwYS8"]').parent().parent().remove();
$is('[href*="ZJ91qt7-brU"]').parent().parent().remove();
$is('[href*="42t7e1-UL7w"]').parent().parent().remove();
$is('[href*="9wCPUUIjjdU"]').parent().parent().remove();
$is('[href*="xAEaA31EdtU"]').parent().parent().remove();
$is('[href*="icBXcvCZfGs"]').parent().parent().remove();
$is('[href*="0qv1nDWN_Rk"]').parent().parent().remove();
$is('[href*="RMYCrWms7y4"]').parent().parent().remove();
$is('[href*="W31937Puv1k"]').parent().parent().remove();
$is('[href*="37BC9p3P4YE"]').parent().parent().remove();
$is('[href*="xBfIskNSWFo"]').parent().parent().remove();
$is('[href*="xwXq9SeBi9k"]').parent().parent().remove();
$is('[href*="LzubQO2fOvA"]').parent().parent().remove();
$is('[href*="Kc6By-4NvZA"]').parent().parent().remove();
$is('[href*="ZlOsu870j8E"]').parent().parent().remove();
$is('[href*="7uIbEdpmdLI"]').parent().parent().remove();
$is('[href*="2XV2bVamPCI"]').parent().parent().remove();
$is('[href*="4tzhyfWHdLo"]').parent().parent().remove();
$is('[href*="Ojoh2ZNaGk8"]').parent().parent().remove();
$is('[href*="u82ptblJvog"]').parent().parent().remove();
$is('[href*="mhnt2JFUvjY"]').parent().parent().remove();
$is('[href*="Lm3i2m-v4xY"]').parent().parent().remove();
$is('[href*="Mvo091_tSGM"]').parent().parent().remove();
$is('[href*="5qNhkw_Ah4U"]').parent().parent().remove();
$is('[href*="4p0DsVPkyZg"]').parent().parent().remove();
$is('[href*="N3WUaMWKM2Q"]').parent().parent().remove();
$is('[href*="BQ2pHDId9xk"]').parent().parent().remove();
$is('[href*="OYwcoa_Aj5Y"]').parent().parent().remove();
$is('[href*="ywCbUHBwFvM"]').parent().parent().remove();
$is('[href*="Oh0J7DppmHI"]').parent().parent().remove();
$is('[href*="TQUweTSLcB4"]').parent().parent().remove();
$is('[href*="KIjHk4RhF8g"]').parent().parent().remove();
$is('[href*="HpXAPLX5m9c"]').parent().parent().remove();
$is('[href*="7iCnMjN6kxs"]').parent().parent().remove();
$is('[href*="_2dxLtdfcvM"]').parent().parent().remove();
$is('[href*="QkIUbHB5rcE"]').parent().parent().remove();
$is('[href*="qUBAtQ3z1ok"]').parent().parent().remove();
$is('[href*="ZkvzReIX-Ws"]').parent().parent().remove();
$is('[href*="EC7eKmaDmGA"]').parent().parent().remove();
$is('[href*="J8v-nOvKaTQ"]').parent().parent().remove();
$is('[href*="ywCbUHBwFvM"]').parent().parent().remove();
$is('[href*="vaHsYU9vlMs"]').parent().parent().remove();
$is('[href*="wK4TkiZhymM"]').parent().parent().remove();
$is('[href*="mfRX44N4oUw"]').parent().parent().remove();
$is('[href*="12x6hCKnwkI"]').parent().parent().remove();
$is('[href*="DWRXTw9AJAA"]').parent().parent().remove();
$is('[href*="YQHsXMglC9A"]').parent().parent().remove();
$is('[href*="8S-DMr28s8g"]').parent().parent().remove();*/
});
  }

setTimeout(delViralez, 500);