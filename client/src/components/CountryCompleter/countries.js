const countries = [
  {
    id: "China",
    label: "China"
  },
  {
    id: "Honduras",
    label: "Honduras"
  },
  {
    id: "India",
    label: "India"
  },
  {
    id: "Indonesia",
    label: "Indonesia"
  },
  {
    id: "Pakistan",
    label: "Pakistan"
  },
  {
    id: "Brazil",
    label: "Brazil"
  },
  {
    id: "Nigeria",
    label: "Nigeria"
  },
  {
    id: "Bangladesh",
    label: "Bangladesh"
  },
  {
    id: "Russia",
    label: "Russia"
  },
  {
    id: "Mexico",
    label: "Mexico"
  },
  {
    id: "Japan",
    label: "Japan"
  },
  {
    id: "Ethiopia",
    label: "Ethiopia"
  },
  {
    id: "Philippines",
    label: "Philippines"
  },
  {
    id: "Egypt",
    label: "Egypt"
  },
  {
    id: "Vietnam",
    label: "Vietnam"
  },
  {
    id: "Turkey",
    label: "Turkey"
  },
  {
    id: "Iran",
    label: "Iran"
  },
  {
    id: "Germany",
    label: "Germany"
  },
  {
    id: "Thailand",
    label: "Thailand"
  },
  {
    id: "France",
    label: "France"
  },
  {
    id: "Italy",
    label: "Italy"
  },
  {
    id: "Tanzania",
    label: "Tanzania"
  },
  {
    id: "Myanmar",
    label: "Myanmar"
  },
  {
    id: "Kenya",
    label: "Kenya"
  },
  {
    id: "Colombia",
    label: "Colombia"
  },
  {
    id: "Spain",
    label: "Spain"
  },
  {
    id: "Uganda",
    label: "Uganda"
  },
  {
    id: "Argentina",
    label: "Argentina"
  },
  {
    id: "Algeria",
    label: "Algeria"
  },
  {
    id: "Sudan",
    label: "Sudan"
  },
  {
    id: "Ukraine",
    label: "Ukraine"
  },
  {
    id: "Iraq",
    label: "Iraq"
  },
  {
    id: "Afghanistan",
    label: "Afghanistan"
  },
  {
    id: "Poland",
    label: "Poland"
  },
  {
    id: "Canada",
    label: "Canada"
  },
  {
    id: "Morocco",
    label: "Morocco"
  },
  {
    id: "Uzbekistan",
    label: "Uzbekistan"
  },
  {
    id: "Peru",
    label: "Peru"
  },
  {
    id: "Angola",
    label: "Angola"
  },
  {
    id: "Malaysia",
    label: "Malaysia"
  },
  {
    id: "Mozambique",
    label: "Mozambique"
  },
  {
    id: "Ghana",
    label: "Ghana"
  },
  {
    id: "Yemen",
    label: "Yemen"
  },
  {
    id: "Nepal",
    label: "Nepal"
  },
  {
    id: "Venezuela",
    label: "Venezuela"
  },
  {
    id: "Madagascar",
    label: "Madagascar"
  },
  {
    id: "Cameroon",
    label: "Cameroon"
  },
  {
    id: "Australia",
    label: "Australia"
  },
  {
    id: "Niger",
    label: "Niger"
  },
  {
    id: "Mali",
    label: "Mali"
  },
  {
    id: "Romania",
    label: "Romania"
  },
  {
    id: "Malawi",
    label: "Malawi"
  },
  {
    id: "Chile",
    label: "Chile"
  },
  {
    id: "Kazakhstan",
    label: "Kazakhstan"
  },
  {
    id: "Zambia",
    label: "Zambia"
  },
  {
    id: "Guatemala",
    label: "Guatemala"
  },
  {
    id: "Ecuador",
    label: "Ecuador"
  },
  {
    id: "Syria",
    label: "Syria"
  },
  {
    id: "Netherlands",
    label: "Netherlands"
  },
  {
    id: "Senegal",
    label: "Senegal"
  },
  {
    id: "Cambodia",
    label: "Cambodia"
  },
  {
    id: "Chad",
    label: "Chad"
  },
  {
    id: "Somalia",
    label: "Somalia"
  },
  {
    id: "Zimbabwe",
    label: "Zimbabwe"
  },
  {
    id: "Guinea",
    label: "Guinea"
  },
  {
    id: "Rwanda",
    label: "Rwanda"
  },
  {
    id: "Benin",
    label: "Benin"
  },
  {
    id: "Burundi",
    label: "Burundi"
  },
  {
    id: "Tunisia",
    label: "Tunisia"
  },
  {
    id: "Bolivia",
    label: "Bolivia"
  },
  {
    id: "Belgium",
    label: "Belgium"
  },
  {
    id: "Haiti",
    label: "Haiti"
  },
  {
    id: "Cuba",
    label: "Cuba"
  },
  {
    id: "Greece",
    label: "Greece"
  },
  {
    id: "Jordan",
    label: "Jordan"
  },
  {
    id: "Portugal",
    label: "Portugal"
  },
  {
    id: "Azerbaijan",
    label: "Azerbaijan"
  },
  {
    id: "Sweden",
    label: "Sweden"
  },
  {
    id: "Hungary",
    label: "Hungary"
  },
  {
    id: "Tajikistan",
    label: "Tajikistan"
  },
  {
    id: "Belarus",
    label: "Belarus"
  },
  {
    id: "Austria",
    label: "Austria"
  },
  {
    id: "Serbia",
    label: "Serbia"
  },
  {
    id: "Israel",
    label: "Israel"
  },
  {
    id: "Switzerland",
    label: "Switzerland"
  },
  {
    id: "Togo",
    label: "Togo"
  },
  {
    id: "Laos",
    label: "Laos"
  },
  {
    id: "Paraguay",
    label: "Paraguay"
  },
  {
    id: "Bulgaria",
    label: "Bulgaria"
  },
  {
    id: "Libya",
    label: "Libya"
  },
  {
    id: "Lebanon",
    label: "Lebanon"
  },
  {
    id: "Nicaragua",
    label: "Nicaragua"
  },
  {
    id: "Kyrgyzstan",
    label: "Kyrgyzstan"
  },
  {
    id: "Turkmenistan",
    label: "Turkmenistan"
  },
  {
    id: "Singapore",
    label: "Singapore"
  },
  {
    id: "Denmark",
    label: "Denmark"
  },
  {
    id: "Finland",
    label: "Finland"
  },
  {
    id: "Congo",
    label: "Congo"
  },
  {
    id: "Slovakia",
    label: "Slovakia"
  },
  {
    id: "Norway",
    label: "Norway"
  },
  {
    id: "Oman",
    label: "Oman"
  },
  {
    id: "Liberia",
    label: "Liberia"
  },
  {
    id: "Ireland",
    label: "Ireland"
  },
  {
    id: "Mauritania",
    label: "Mauritania"
  },
  {
    id: "Panama",
    label: "Panama"
  },
  {
    id: "Kuwait",
    label: "Kuwait"
  },
  {
    id: "Croatia",
    label: "Croatia"
  },
  {
    id: "Moldova",
    label: "Moldova"
  },
  {
    id: "Georgia",
    label: "Georgia"
  },
  {
    id: "Eritrea",
    label: "Eritrea"
  },
  {
    id: "Uruguay",
    label: "Uruguay"
  },
  {
    id: "Mongolia",
    label: "Mongolia"
  },
  {
    id: "Armenia",
    label: "Armenia"
  },
  {
    id: "Jamaica",
    label: "Jamaica"
  },
  {
    id: "Qatar",
    label: "Qatar"
  },
  {
    id: "Albania",
    label: "Albania"
  },
  {
    id: "Lithuania",
    label: "Lithuania"
  },
  {
    id: "Namibia",
    label: "Namibia"
  },
  {
    id: "Gambia",
    label: "Gambia"
  },
  {
    id: "Botswana",
    label: "Botswana"
  },
  {
    id: "Gabon",
    label: "Gabon"
  },
  {
    id: "Lesotho",
    label: "Lesotho"
  },
  {
    id: "Slovenia",
    label: "Slovenia"
  },
  {
    id: "Latvia",
    label: "Latvia"
  },
  {
    id: "Bahrain",
    label: "Bahrain"
  },
  {
    id: "Estonia",
    label: "Estonia"
  },
  {
    id: "Mauritius",
    label: "Mauritius"
  },
  {
    id: "Cyprus",
    label: "Cyprus"
  },
  {
    id: "Eswatini",
    label: "Eswatini"
  },
  {
    id: "Djibouti",
    label: "Djibouti"
  },
  {
    id: "Fiji",
    label: "Fiji"
  },
  {
    id: "Comoros",
    label: "Comoros"
  },
  {
    id: "Guyana",
    label: "Guyana"
  },
  {
    id: "Bhutan",
    label: "Bhutan"
  },
  {
    id: "Montenegro",
    label: "Montenegro"
  },
  {
    id: "Luxembourg",
    label: "Luxembourg"
  },
  {
    id: "Suriname",
    label: "Suriname"
  },
  {
    id: "Maldives",
    label: "Maldives"
  },
  {
    id: "Malta",
    label: "Malta"
  },
  {
    id: "Brunei",
    label: "Brunei"
  },
  {
    id: "Belize",
    label: "Belize"
  },
  {
    id: "Bahamas",
    label: "Bahamas"
  },
  {
    id: "Iceland",
    label: "Iceland"
  },
  {
    id: "Vanuatu",
    label: "Vanuatu"
  },
  {
    id: "Barbados",
    label: "Barbados"
  },
  {
    id: "Samoa",
    label: "Samoa"
  },
  {
    id: "Kiribati",
    label: "Kiribati"
  },
  {
    id: "Micronesia",
    label: "Micronesia"
  },
  {
    id: "Grenada",
    label: "Grenada"
  },
  {
    id: "Tonga",
    label: "Tonga"
  },
  {
    id: "Seychelles",
    label: "Seychelles"
  },
  {
    id: "Andorra",
    label: "Andorra"
  },
  {
    id: "Dominica",
    label: "Dominica"
  },
  {
    id: "Monaco",
    label: "Monaco"
  },
  {
    id: "Liechtenstein",
    label: "Liechtenstein"
  },
  {
    id: "Palau",
    label: "Palau"
  },
  {
    id: "Tuvalu",
    label: "Tuvalu"
  },
  {
    id: "Nauru",
    label: "Nauru"
  },
  {
    id: "US",
    label: "United States"
  },
  {
    id: "US",
    label: "United States of America"
  },
  {
    id: "Saudi Arabia",
    label: "Saudi Arabia"
  },
  {
    id: "United Kingdom",
    label: "United Kingdom"
  },
  {
    id: "Solomon Islands",
    label: "Solomon Islands"
  },
  {
    id: "South Africa",
    label: "South Africa"
  },
  {
    id: "Korea, South",
    label: "Korea, South"
  },
  {
    id: "Korea, South",
    label: "South Korea"
  },
  {
    id: "Saint Lucia",
    label: "Saint Lucia"
  },
  {
    id: "Cabo Verde",
    label: "Cabo Verde"
  },
  {
    id: "DR Congo",
    label: "DR Congo"
  },
  {
    id: "Sri Lanka",
    label: "Sri Lanka"
  },
  {
    id: "Burkina Faso",
    label: "Burkina Faso"
  },
  {
    id: "South Sudan",
    label: "South Sudan"
  },
  {
    id: "Guinea-Bissau",
    label: "Guinea-Bissau"
  },
  {
    id: "Dominican Republic",
    label: "Dominican Republic"
  },
  {
    id: "Holy See",
    label: "Holy See"
  },
  {
    id: "San Marino",
    label: "San Marino"
  },
  {
    id: "Marshall Islands",
    label: "Marshall Islands"
  },
  {
    id: "Sierra Leone",
    label: "Sierra Leone"
  },
  {
    id: "Côte d'Ivoire",
    label: "Côte d'Ivoire"
  },
  {
    id: "Czech Republic (Czechia)",
    label: "Czech Republic (Czechia)"
  },
  {
    id: "United Arab Emirates",
    label: "United Arab Emirates"
  },
  {
    id: "Papua New Guinea",
    label: "Papua New Guinea"
  },
  {
    id: "El Salvador",
    label: "El Salvador"
  },
  {
    id: "State of Palestine",
    label: "State of Palestine"
  },
  {
    id: "Central African Republic",
    label: "Central African Republic"
  },
  {
    id: "New Zealand",
    label: "New Zealand"
  },
  {
    id: "Costa Rica",
    label: "Costa Rica"
  },
  {
    id: "North Macedonia",
    label: "North Macedonia"
  },
  {
    id: "Equatorial Guinea",
    label: "Equatorial Guinea"
  },
  {
    id: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina"
  },
  {
    id: "Trinidad and Tobago",
    label: "Trinidad and Tobago"
  },
  {
    id: "Timor-Leste",
    label: "Timor-Leste"
  },
  {
    id: "Sao Tome & Principe",
    label: "Sao Tome & Principe"
  },
  {
    id: "St. Vincent & Grenadines",
    label: "St. Vincent & Grenadines"
  },
  {
    id: "Antigua and Barbuda",
    label: "Antigua and Barbuda"
  },
  {
    id: "Saint Kitts & Nevis",
    label: "Saint Kitts & Nevis"
  },
  {
    id: "Algeria",
    label: "DZ"
  },
  {
    id: "Aland Islands",
    label: "AX"
  },
  {
    id: "American Samoa",
    label: "AS"
  },
  {
    id: "Anguilla",
    label: "AI"
  },
  {
    id: "Andorra",
    label: "AD"
  },
  {
    id: "Angola",
    label: "AO"
  },
  {
    id: "Antigua and Barbuda",
    label: "AG"
  },
  {
    id: "Antarctica",
    label: "AQ"
  },
  {
    id: "Armenia",
    label: "AM"
  },
  {
    id: "Austria",
    label: "AT"
  },
  {
    id: "Aruba",
    label: "AW"
  },
  {
    id: "Bosnia and Herzegovina",
    label: "BA"
  },
  {
    id: "Barbados",
    label: "BB"
  },
  {
    id: "Bangladesh",
    label: "BD"
  },
  {
    id: "Burkina Faso",
    label: "BF"
  },
  {
    id: "Bulgaria",
    label: "BG"
  },
  {
    id: "Bahrain",
    label: "BH"
  },
  {
    id: "Burundi",
    label: "BI"
  },
  {
    id: "Benin",
    label: "BJ"
  },
  {
    id: "Bermuda",
    label: "BM"
  },
  {
    id: "Brunei Darussalam",
    label: "BN"
  },
  {
    id: "Bahamas",
    label: "BS"
  },
  {
    id: "Bhutan",
    label: "BT"
  },
  {
    id: "Bouvet Island",
    label: "BV"
  },
  {
    id: "Botswana",
    label: "BW"
  },
  {
    id: "Belarus",
    label: "BV"
  },
  {
    id: "Belize",
    label: "BZ"
  },
  {
    id: "Cambodia",
    label: "KH"
  },
  {
    id: "Cameroon",
    label: "CM"
  },
  {
    id: "Cape Verde",
    label: "CV"
  },
  {
    id: "Central African Republic",
    label: "CF"
  },
  {
    id: "Chad",
    label: "TD"
  },
  {
    id: "Chile",
    label: "CL"
  },
  {
    id: "China",
    label: "CN"
  },
  {
    id: "Christmas Island",
    label: "CX"
  },
  {
    id: "Cocos (Keeling) Islands",
    label: "CC"
  },
  {
    id: "Congo",
    label: "CG"
  },
  {
    id: "Cote D'Ivoire (Ivory Coast)",
    label: "CI"
  },
  {
    id: "Cook Islands",
    label: "CK"
  },
  {
    id: "Costa Rica",
    label: "CR"
  },
  {
    id: "Democratic Republic of the Congo",
    label: "CD"
  },
  {
    id: "Denmark",
    label: "DK"
  },
  {
    id: "Dominica",
    label: "DM"
  },
  {
    id: "El Salvador",
    label: "SV"
  },
  {
    id: "East Timor",
    label: "TP"
  },
  {
    id: "Estonia",
    label: "EE"
  },
  {
    id: "Equatorial Guinea",
    label: "GQ"
  },
  {
    id: "Fiji",
    label: "FJ"
  },
  {
    id: "Falkland Islands (Malvinas)",
    label: "FK"
  },
  {
    id: "Federated States of Micronesia",
    label: "FM"
  },
  {
    id: "Faroe Islands",
    label: "FO"
  },
  {
    id: "Gambia",
    label: "GM"
  },
  {
    id: "Germany",
    label: "DE"
  },
  {
    id: "Great Britain",
    label: "GB"
  },
  {
    id: "United Kingdom",
    label: "UK"
  },
  {
    id: "Grenada",
    label: "GD"
  },
  {
    id: "Greenland",
    label: "GL"
  },
  {
    id: "Guinea",
    label: "GN"
  },
  {
    id: "Guadeloupe",
    label: "GP"
  },
  {
    id: "S. Georgia and S. Sandwich Islands",
    label: "GS"
  },
  {
    id: "Guatemala",
    label: "GT"
  },
  {
    id: "Guinea-Bissau",
    label: "GW"
  },
  {
    id: "Guyana",
    label: "GY"
  },
  {
    id: "Hong Kong",
    label: "HK"
  },
  {
    id: "Heard Island and McDonald Islands",
    label: "HM"
  },
  {
    id: "Honduras",
    label: "HN"
  },
  {
    id: "Haiti",
    label: "HT"
  },
  {
    id: "Indonesia",
    label: "ID"
  },
  {
    id: "Ireland",
    label: "IE"
  },
  {
    id: "Israel",
    label: "IL"
  },
  {
    id: "British Indian Ocean Territory",
    label: "IO"
  },
  {
    id: "Iraq",
    label: "IQ"
  },
  {
    id: "Jamaica",
    label: "JM"
  },
  {
    id: "Japan",
    label: "JP"
  },
  {
    id: "Kyrgyzstan",
    label: "KG"
  },
  {
    id: "Comoros",
    label: "KM"
  },
  {
    id: "Saint Kitts and Nevis",
    label: "KN"
  },
  {
    id: "Korea, South",
    label: "KR"
  },
  {
    id: "Kuwait",
    label: "KW"
  },
  {
    id: "Cayman Islands",
    label: "KY"
  },
  {
    id: "Kazakhstan",
    label: "KZ"
  },
  {
    id: "Lebanon",
    label: "LB"
  },
  {
    id: "Saint Lucia",
    label: "LC"
  },
  {
    id: "Sri Lanka",
    label: "LK"
  },
  {
    id: "Liberia",
    label: "LR"
  },
  {
    id: "Lesotho",
    label: "LS"
  },
  {
    id: "Lithuania",
    label: "LT"
  },
  {
    id: "Latvia",
    label: "LV"
  },
  {
    id: "Libya",
    label: "LY"
  },
  {
    id: "Macedonia",
    label: "MK"
  },
  {
    id: "Macao",
    label: "MO"
  },
  {
    id: "Madagascar",
    label: "MG"
  },
  {
    id: "Malaysia",
    label: "MY"
  },
  {
    id: "Mali",
    label: "ML"
  },
  {
    id: "Malawi",
    label: "MW"
  },
  {
    id: "Mauritania",
    label: "MR"
  },
  {
    id: "Marshall Islands",
    label: "MH"
  },
  {
    id: "Martinique",
    label: "MQ"
  },
  {
    id: "Mauritius",
    label: "MU"
  },
  {
    id: "Mayotte",
    label: "YT"
  },
  {
    id: "Malta",
    label: "MT"
  },
  {
    id: "Mexico",
    label: "MX"
  },
  {
    id: "Morocco",
    label: "MA"
  },
  {
    id: "Monaco",
    label: "MC"
  },
  {
    id: "Moldova",
    label: "MD"
  },
  {
    id: "Mongolia",
    label: "MN"
  },
  {
    id: "Myanmar",
    label: "MM"
  },
  {
    id: "Northern Mariana Islands",
    label: "MP"
  },
  {
    id: "Montserrat",
    label: "MS"
  },
  {
    id: "Maldives",
    label: "MV"
  },
  {
    id: "Mozambique",
    label: "MZ"
  },
  {
    id: "Namibia",
    label: "NA"
  },
  {
    id: "New Caledonia",
    label: "NC"
  },
  {
    id: "Niger",
    label: "NE"
  },
  {
    id: "Norfolk Island",
    label: "NF"
  },
  {
    id: "Nigeria",
    label: "NG"
  },
  {
    id: "Netherlands",
    label: "NL"
  },
  {
    id: "Norway",
    label: "NO"
  },
  {
    id: "Nepal",
    label: "NP"
  },
  {
    id: "Nauru",
    label: "NR"
  },
  {
    id: "Niue",
    label: "NU"
  },
  {
    id: "New Zealand",
    label: "NZ"
  },
  {
    id: "Papua New Guinea",
    label: "PG"
  },
  {
    id: "Pakistan",
    label: "PK"
  },
  {
    id: "Poland",
    label: "PL"
  },
  {
    id: "Saint Pierre and Miquelon",
    label: "PM"
  },
  {
    id: "Serbia and Montenegro",
    label: "CS"
  },
  {
    id: "Pitcairn",
    label: "PN"
  },
  {
    id: "Puerto Rico",
    label: "PR"
  },
  {
    id: "Palestinian Territory",
    label: "PS"
  },
  {
    id: "Portugal",
    label: "PT"
  },
  {
    id: "Palau",
    label: "PW"
  },
  {
    id: "Paraguay",
    label: "PY"
  },
  {
    id: "Samoa",
    label: "WS"
  },
  {
    id: "Saint Helena",
    label: "SH"
  },
  {
    id: "Saint Vincent and the Grenadines",
    label: "VC"
  },
  {
    id: "San Marino",
    label: "SM"
  },
  {
    id: "Sao Tome and Principe",
    label: "ST"
  },
  {
    id: "Senegal",
    label: "SN"
  },
  {
    id: "Seychelles",
    label: "SC"
  },
  {
    id: "Sierra Leone",
    label: "SL"
  },
  {
    id: "Singapore",
    label: "SG"
  },
  {
    id: "Slovakia",
    label: "SK"
  },
  {
    id: "Slovenia",
    label: "SI"
  },
  {
    id: "Solomon Islands",
    label: "SB"
  },
  {
    id: "Somalia",
    label: "SO"
  },
  {
    id: "South Africa",
    label: "ZA"
  },
  {
    id: "Spain",
    label: "ES"
  },
  {
    id: "Sudan",
    label: "SD"
  },
  {
    id: "Suriname",
    label: "SR"
  },
  {
    id: "Svalbard and Jan Mayen",
    label: "SJ"
  },
  {
    id: "Sweden",
    label: "SE"
  },
  {
    id: "Switzerland",
    label: "CH"
  },
  {
    id: "Swaziland",
    label: "SZ"
  },
  {
    id: "Taiwan",
    label: "TW"
  },
  {
    id: "Tanzania",
    label: "TZ"
  },
  {
    id: "Tajikistan",
    label: "TJ"
  },
  {
    id: "Timor-Leste",
    label: "TL"
  },
  {
    id: "Togo",
    label: "TG"
  },
  {
    id: "Tokelau",
    label: "TK"
  },
  {
    id: "Trinidad and Tobago",
    label: "TT"
  },
  {
    id: "Tunisia",
    label: "TN"
  },
  {
    id: "Turkey",
    label: "TR"
  },
  {
    id: "Turkmenistan",
    label: "TM"
  },
  {
    id: "Turks and Caicos Islands",
    label: "TC"
  },
  {
    id: "Tuvalu",
    label: "TV"
  },
  {
    id: "Ukraine",
    label: "UA"
  },
  {
    id: "United Arab Emirates",
    label: "AE"
  },
  {
    id: "US",
    label: "US"
  },
  {
    id: "Uruguay",
    label: "UY"
  },
  {
    id: "Vanuatu",
    label: "VU"
  },
  {
    id: "Virgin Islands (British)",
    label: "VG"
  },
  {
    id: "Virgin Islands (U.S.)",
    label: "VI"
  },
  {
    id: "Viet Nam",
    label: "VN"
  },
  {
    id: "Wallis and Futuna",
    label: "WF"
  },
  {
    id: "Western Sahara",
    label: "EH"
  },
  {
    id: "Zambia",
    label: "ZM"
  },
  {
    id: "Zimbabwe",
    label: "ZW"
  }
];

export { countries };
