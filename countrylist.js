let country_list = [
  {
    "Country": "Seychelles",
    "Slug": "seychelles",
    "ISO2": "SC"
  },
  {
    "Country": "Tuvalu",
    "Slug": "tuvalu",
    "ISO2": "TV"
  },
  {
    "Country": "Kiribati",
    "Slug": "kiribati",
    "ISO2": "KI"
  },
  {
    "Country": "Saint Helena",
    "Slug": "saint-helena",
    "ISO2": "SH"
  },
  {
    "Country": "San Marino",
    "Slug": "san-marino",
    "ISO2": "SM"
  },
  {
    "Country": "Singapore",
    "Slug": "singapore",
    "ISO2": "SG"
  },
  {
    "Country": "Cyprus",
    "Slug": "cyprus",
    "ISO2": "CY"
  },
  {
    "Country": "Gambia",
    "Slug": "gambia",
    "ISO2": "GM"
  },
  {
    "Country": "Iraq",
    "Slug": "iraq",
    "ISO2": "IQ"
  },
  {
    "Country": "New Zealand",
    "Slug": "new-zealand",
    "ISO2": "NZ"
  },
  {
    "Country": "Chad",
    "Slug": "chad",
    "ISO2": "TD"
  },
  {
    "Country": "Iceland",
    "Slug": "iceland",
    "ISO2": "IS"
  },
  {
    "Country": "Netherlands Antilles",
    "Slug": "netherlands-antilles",
    "ISO2": "AN"
  },
  {
    "Country": "Pakistan",
    "Slug": "pakistan",
    "ISO2": "PK"
  },
  {
    "Country": "Somalia",
    "Slug": "somalia",
    "ISO2": "SO"
  },
  {
    "Country": "Belarus",
    "Slug": "belarus",
    "ISO2": "BY"
  },
  {
    "Country": "Croatia",
    "Slug": "croatia",
    "ISO2": "HR"
  },
  {
    "Country": "Belgium",
    "Slug": "belgium",
    "ISO2": "BE"
  },
  {
    "Country": "Bulgaria",
    "Slug": "bulgaria",
    "ISO2": "BG"
  },
  {
    "Country": "Germany",
    "Slug": "germany",
    "ISO2": "DE"
  },
  {
    "Country": "Isle of Man",
    "Slug": "isle-of-man",
    "ISO2": "IM"
  },
  {
    "Country": "Micronesia, Federated States of",
    "Slug": "micronesia",
    "ISO2": "FM"
  },
  {
    "Country": "Palau",
    "Slug": "palau",
    "ISO2": "PW"
  },
  {
    "Country": "Guyana",
    "Slug": "guyana",
    "ISO2": "GY"
  },
  {
    "Country": "Tunisia",
    "Slug": "tunisia",
    "ISO2": "TN"
  },
  {
    "Country": "Turks and Caicos Islands",
    "Slug": "turks-and-caicos-islands",
    "ISO2": "TC"
  },
  {
    "Country": "Gabon",
    "Slug": "gabon",
    "ISO2": "GA"
  },
  {
    "Country": "Slovenia",
    "Slug": "slovenia",
    "ISO2": "SI"
  },
  {
    "Country": "Tonga",
    "Slug": "tonga",
    "ISO2": "TO"
  },
  {
    "Country": "Mauritania",
    "Slug": "mauritania",
    "ISO2": "MR"
  },
  {
    "Country": "Norfolk Island",
    "Slug": "norfolk-island",
    "ISO2": "NF"
  },
  {
    "Country": "Sao Tome and Principe",
    "Slug": "sao-tome-and-principe",
    "ISO2": "ST"
  },
  {
    "Country": "Syrian Arab Republic (Syria)",
    "Slug": "syria",
    "ISO2": "SY"
  },
  {
    "Country": "US Minor Outlying Islands",
    "Slug": "us-minor-outlying-islands",
    "ISO2": "UM"
  },
  {
    "Country": "Macao, SAR China",
    "Slug": "macao-sar-china",
    "ISO2": "MO"
  },
  {
    "Country": "Samoa",
    "Slug": "samoa",
    "ISO2": "WS"
  },
  {
    "Country": "Réunion",
    "Slug": "réunion",
    "ISO2": "RE"
  },
  {
    "Country": "Philippines",
    "Slug": "philippines",
    "ISO2": "PH"
  },
  {
    "Country": "Thailand",
    "Slug": "thailand",
    "ISO2": "TH"
  },
  {
    "Country": "Italy",
    "Slug": "italy",
    "ISO2": "IT"
  },
  {
    "Country": "Nauru",
    "Slug": "nauru",
    "ISO2": "NR"
  },
  {
    "Country": "Christmas Island",
    "Slug": "christmas-island",
    "ISO2": "CX"
  },
  {
    "Country": "Cameroon",
    "Slug": "cameroon",
    "ISO2": "CM"
  },
  {
    "Country": "Kyrgyzstan",
    "Slug": "kyrgyzstan",
    "ISO2": "KG"
  },
  {
    "Country": "Afghanistan",
    "Slug": "afghanistan",
    "ISO2": "AF"
  },
  {
    "Country": "Anguilla",
    "Slug": "anguilla",
    "ISO2": "AI"
  },
  {
    "Country": "Falkland Islands (Malvinas)",
    "Slug": "falkland-islands-malvinas",
    "ISO2": "FK"
  },
  {
    "Country": "Myanmar",
    "Slug": "myanmar",
    "ISO2": "MM"
  },
  {
    "Country": "Svalbard and Jan Mayen Islands",
    "Slug": "svalbard-and-jan-mayen-islands",
    "ISO2": "SJ"
  },
  {
    "Country": "Sweden",
    "Slug": "sweden",
    "ISO2": "SE"
  },
  {
    "Country": "Yemen",
    "Slug": "yemen",
    "ISO2": "YE"
  },
  {
    "Country": "ALA Aland Islands",
    "Slug": "ala-aland-islands",
    "ISO2": "AX"
  },
  {
    "Country": "France",
    "Slug": "france",
    "ISO2": "FR"
  },
  {
    "Country": "Indonesia",
    "Slug": "indonesia",
    "ISO2": "ID"
  },
  {
    "Country": "Kenya",
    "Slug": "kenya",
    "ISO2": "KE"
  },
  {
    "Country": "Tajikistan",
    "Slug": "tajikistan",
    "ISO2": "TJ"
  },
  {
    "Country": "Western Sahara",
    "Slug": "western-sahara",
    "ISO2": "EH"
  },
  {
    "Country": "Congo (Brazzaville)",
    "Slug": "congo-brazzaville",
    "ISO2": "CG"
  },
  {
    "Country": "Luxembourg",
    "Slug": "luxembourg",
    "ISO2": "LU"
  },
  {
    "Country": "United Kingdom",
    "Slug": "united-kingdom",
    "ISO2": "GB"
  },
  {
    "Country": "Guadeloupe",
    "Slug": "guadeloupe",
    "ISO2": "GP"
  },
  {
    "Country": "Australia",
    "Slug": "australia",
    "ISO2": "AU"
  },
  {
    "Country": "Bahamas",
    "Slug": "bahamas",
    "ISO2": "BS"
  },
  {
    "Country": "Macedonia, Republic of",
    "Slug": "macedonia",
    "ISO2": "MK"
  },
  {
    "Country": "Romania",
    "Slug": "romania",
    "ISO2": "RO"
  },
  {
    "Country": "Wallis and Futuna Islands",
    "Slug": "wallis-and-futuna-islands",
    "ISO2": "WF"
  },
  {
    "Country": "Aruba",
    "Slug": "aruba",
    "ISO2": "AW"
  },
  {
    "Country": "Argentina",
    "Slug": "argentina",
    "ISO2": "AR"
  },
  {
    "Country": "Greece",
    "Slug": "greece",
    "ISO2": "GR"
  },
  {
    "Country": "Saint Pierre and Miquelon",
    "Slug": "saint-pierre-and-miquelon",
    "ISO2": "PM"
  },
  {
    "Country": "Austria",
    "Slug": "austria",
    "ISO2": "AT"
  },
  {
    "Country": "United Arab Emirates",
    "Slug": "united-arab-emirates",
    "ISO2": "AE"
  },
  {
    "Country": "Netherlands",
    "Slug": "netherlands",
    "ISO2": "NL"
  },
  {
    "Country": "Trinidad and Tobago",
    "Slug": "trinidad-and-tobago",
    "ISO2": "TT"
  },
  {
    "Country": "Egypt",
    "Slug": "egypt",
    "ISO2": "EG"
  },
  {
    "Country": "Libya",
    "Slug": "libya",
    "ISO2": "LY"
  },
  {
    "Country": "Lithuania",
    "Slug": "lithuania",
    "ISO2": "LT"
  },
  {
    "Country": "Guernsey",
    "Slug": "guernsey",
    "ISO2": "GG"
  },
  {
    "Country": "Liechtenstein",
    "Slug": "liechtenstein",
    "ISO2": "LI"
  },
  {
    "Country": "Togo",
    "Slug": "togo",
    "ISO2": "TG"
  },
  {
    "Country": "American Samoa",
    "Slug": "american-samoa",
    "ISO2": "AS"
  },
  {
    "Country": "Faroe Islands",
    "Slug": "faroe-islands",
    "ISO2": "FO"
  },
  {
    "Country": "Portugal",
    "Slug": "portugal",
    "ISO2": "PT"
  },
  {
    "Country": "Republic of Kosovo",
    "Slug": "kosovo",
    "ISO2": "XK"
  },
  {
    "Country": "Zimbabwe",
    "Slug": "zimbabwe",
    "ISO2": "ZW"
  },
  {
    "Country": "Gibraltar",
    "Slug": "gibraltar",
    "ISO2": "GI"
  },
  {
    "Country": "Guinea-Bissau",
    "Slug": "guinea-bissau",
    "ISO2": "GW"
  },
  {
    "Country": "Mali",
    "Slug": "mali",
    "ISO2": "ML"
  },
  {
    "Country": "Bermuda",
    "Slug": "bermuda",
    "ISO2": "BM"
  },
  {
    "Country": "Mongolia",
    "Slug": "mongolia",
    "ISO2": "MN"
  },
  {
    "Country": "Brazil",
    "Slug": "brazil",
    "ISO2": "BR"
  },
  {
    "Country": "Marshall Islands",
    "Slug": "marshall-islands",
    "ISO2": "MH"
  },
  {
    "Country": "Martinique",
    "Slug": "martinique",
    "ISO2": "MQ"
  },
  {
    "Country": "Bahrain",
    "Slug": "bahrain",
    "ISO2": "BH"
  },
  {
    "Country": "Malawi",
    "Slug": "malawi",
    "ISO2": "MW"
  },
  {
    "Country": "Montenegro",
    "Slug": "montenegro",
    "ISO2": "ME"
  },
  {
    "Country": "Peru",
    "Slug": "peru",
    "ISO2": "PE"
  },
  {
    "Country": "Puerto Rico",
    "Slug": "puerto-rico",
    "ISO2": "PR"
  },
  {
    "Country": "Chile",
    "Slug": "chile",
    "ISO2": "CL"
  },
  {
    "Country": "Hong Kong, SAR China",
    "Slug": "hong-kong-sar-china",
    "ISO2": "HK"
  },
  {
    "Country": "Israel",
    "Slug": "israel",
    "ISO2": "IL"
  },
  {
    "Country": "Malta",
    "Slug": "malta",
    "ISO2": "MT"
  },
  {
    "Country": "Mexico",
    "Slug": "mexico",
    "ISO2": "MX"
  },
  {
    "Country": "Morocco",
    "Slug": "morocco",
    "ISO2": "MA"
  },
  {
    "Country": "Mozambique",
    "Slug": "mozambique",
    "ISO2": "MZ"
  },
  {
    "Country": "Pitcairn",
    "Slug": "pitcairn",
    "ISO2": "PN"
  },
  {
    "Country": "Antarctica",
    "Slug": "antarctica",
    "ISO2": "AQ"
  },
  {
    "Country": "Cape Verde",
    "Slug": "cape-verde",
    "ISO2": "CV"
  },
  {
    "Country": "Cuba",
    "Slug": "cuba",
    "ISO2": "CU"
  },
  {
    "Country": "Central African Republic",
    "Slug": "central-african-republic",
    "ISO2": "CF"
  },
  {
    "Country": "Saint Vincent and Grenadines",
    "Slug": "saint-vincent-and-the-grenadines",
    "ISO2": "VC"
  },
  {
    "Country": "Senegal",
    "Slug": "senegal",
    "ISO2": "SN"
  },
  {
    "Country": "Virgin Islands, US",
    "Slug": "virgin-islands",
    "ISO2": "VI"
  },
  {
    "Country": "French Southern Territories",
    "Slug": "french-southern-territories",
    "ISO2": "TF"
  },
  {
    "Country": "Ghana",
    "Slug": "ghana",
    "ISO2": "GH"
  },
  {
    "Country": "Côte d'Ivoire",
    "Slug": "cote-divoire",
    "ISO2": "CI"
  },
  {
    "Country": "Fiji",
    "Slug": "fiji",
    "ISO2": "FJ"
  },
  {
    "Country": "Andorra",
    "Slug": "andorra",
    "ISO2": "AD"
  },
  {
    "Country": "Niue",
    "Slug": "niue",
    "ISO2": "NU"
  },
  {
    "Country": "Paraguay",
    "Slug": "paraguay",
    "ISO2": "PY"
  },
  {
    "Country": "Colombia",
    "Slug": "colombia",
    "ISO2": "CO"
  },
  {
    "Country": "Congo (Kinshasa)",
    "Slug": "congo-kinshasa",
    "ISO2": "CD"
  },
  {
    "Country": "Ecuador",
    "Slug": "ecuador",
    "ISO2": "EC"
  },
  {
    "Country": "British Indian Ocean Territory",
    "Slug": "british-indian-ocean-territory",
    "ISO2": "IO"
  },
  {
    "Country": "Cayman Islands",
    "Slug": "cayman-islands",
    "ISO2": "KY"
  },
  {
    "Country": "Tokelau",
    "Slug": "tokelau",
    "ISO2": "TK"
  },
  {
    "Country": "Ireland",
    "Slug": "ireland",
    "ISO2": "IE"
  },
  {
    "Country": "Maldives",
    "Slug": "maldives",
    "ISO2": "MV"
  },
  {
    "Country": "Bolivia",
    "Slug": "bolivia",
    "ISO2": "BO"
  },
  {
    "Country": "El Salvador",
    "Slug": "el-salvador",
    "ISO2": "SV"
  },
  {
    "Country": "Japan",
    "Slug": "japan",
    "ISO2": "JP"
  },
  {
    "Country": "Viet Nam",
    "Slug": "vietnam",
    "ISO2": "VN"
  },
  {
    "Country": "Bosnia and Herzegovina",
    "Slug": "bosnia-and-herzegovina",
    "ISO2": "BA"
  },
  {
    "Country": "Eritrea",
    "Slug": "eritrea",
    "ISO2": "ER"
  },
  {
    "Country": "Holy See (Vatican City State)",
    "Slug": "holy-see-vatican-city-state",
    "ISO2": "VA"
  },
  {
    "Country": "Ethiopia",
    "Slug": "ethiopia",
    "ISO2": "ET"
  },
  {
    "Country": "Finland",
    "Slug": "finland",
    "ISO2": "FI"
  },
  {
    "Country": "Angola",
    "Slug": "angola",
    "ISO2": "AO"
  },
  {
    "Country": "Burundi",
    "Slug": "burundi",
    "ISO2": "BI"
  },
  {
    "Country": "Saudi Arabia",
    "Slug": "saudi-arabia",
    "ISO2": "SA"
  },
  {
    "Country": "Cocos (Keeling) Islands",
    "Slug": "cocos-keeling-islands",
    "ISO2": "CC"
  },
  {
    "Country": "Djibouti",
    "Slug": "djibouti",
    "ISO2": "DJ"
  },
  {
    "Country": "Kuwait",
    "Slug": "kuwait",
    "ISO2": "KW"
  },
  {
    "Country": "Liberia",
    "Slug": "liberia",
    "ISO2": "LR"
  },
  {
    "Country": "Saint-Martin (French part)",
    "Slug": "saint-martin-french-part",
    "ISO2": "MF"
  },
  {
    "Country": "Taiwan, Republic of China",
    "Slug": "taiwan",
    "ISO2": "TW"
  },
  {
    "Country": "Czech Republic",
    "Slug": "czech-republic",
    "ISO2": "CZ"
  },
  {
    "Country": "Estonia",
    "Slug": "estonia",
    "ISO2": "EE"
  },
  {
    "Country": "Guinea",
    "Slug": "guinea",
    "ISO2": "GN"
  },
  {
    "Country": "Malaysia",
    "Slug": "malaysia",
    "ISO2": "MY"
  },
  {
    "Country": "Nepal",
    "Slug": "nepal",
    "ISO2": "NP"
  },
  {
    "Country": "Oman",
    "Slug": "oman",
    "ISO2": "OM"
  },
  {
    "Country": "Sierra Leone",
    "Slug": "sierra-leone",
    "ISO2": "SL"
  },
  {
    "Country": "Armenia",
    "Slug": "armenia",
    "ISO2": "AM"
  },
  {
    "Country": "Cook Islands",
    "Slug": "cook-islands",
    "ISO2": "CK"
  },
  {
    "Country": "India",
    "Slug": "india",
    "ISO2": "IN"
  },
  {
    "Country": "Saint Kitts and Nevis",
    "Slug": "saint-kitts-and-nevis",
    "ISO2": "KN"
  },
  {
    "Country": "South Sudan",
    "Slug": "south-sudan",
    "ISO2": "SS"
  },
  {
    "Country": "Bouvet Island",
    "Slug": "bouvet-island",
    "ISO2": "BV"
  },
  {
    "Country": "Dominica",
    "Slug": "dominica",
    "ISO2": "DM"
  },
  {
    "Country": "Panama",
    "Slug": "panama",
    "ISO2": "PA"
  },
  {
    "Country": "United States of America",
    "Slug": "united-states",
    "ISO2": "US"
  },
  {
    "Country": "Antigua and Barbuda",
    "Slug": "antigua-and-barbuda",
    "ISO2": "AG"
  },
  {
    "Country": "Iran, Islamic Republic of",
    "Slug": "iran",
    "ISO2": "IR"
  },
  {
    "Country": "Palestinian Territory",
    "Slug": "palestine",
    "ISO2": "PS"
  },
  {
    "Country": "Grenada",
    "Slug": "grenada",
    "ISO2": "GD"
  },
  {
    "Country": "Lebanon",
    "Slug": "lebanon",
    "ISO2": "LB"
  },
  {
    "Country": "Namibia",
    "Slug": "namibia",
    "ISO2": "NA"
  },
  {
    "Country": "Nigeria",
    "Slug": "nigeria",
    "ISO2": "NG"
  },
  {
    "Country": "Suriname",
    "Slug": "suriname",
    "ISO2": "SR"
  },
  {
    "Country": "Belize",
    "Slug": "belize",
    "ISO2": "BZ"
  },
  {
    "Country": "Burkina Faso",
    "Slug": "burkina-faso",
    "ISO2": "BF"
  },
  {
    "Country": "Ukraine",
    "Slug": "ukraine",
    "ISO2": "UA"
  },
  {
    "Country": "Zambia",
    "Slug": "zambia",
    "ISO2": "ZM"
  },
  {
    "Country": "Nicaragua",
    "Slug": "nicaragua",
    "ISO2": "NI"
  },
  {
    "Country": "Northern Mariana Islands",
    "Slug": "northern-mariana-islands",
    "ISO2": "MP"
  },
  {
    "Country": "South Africa",
    "Slug": "south-africa",
    "ISO2": "ZA"
  },
  {
    "Country": "Vanuatu",
    "Slug": "vanuatu",
    "ISO2": "VU"
  },
  {
    "Country": "Benin",
    "Slug": "benin",
    "ISO2": "BJ"
  },
  {
    "Country": "Greenland",
    "Slug": "greenland",
    "ISO2": "GL"
  },
  {
    "Country": "Madagascar",
    "Slug": "madagascar",
    "ISO2": "MG"
  },
  {
    "Country": "Sudan",
    "Slug": "sudan",
    "ISO2": "SD"
  },
  {
    "Country": "Timor-Leste",
    "Slug": "timor-leste",
    "ISO2": "TL"
  },
  {
    "Country": "Venezuela (Bolivarian Republic)",
    "Slug": "venezuela",
    "ISO2": "VE"
  },
  {
    "Country": "Denmark",
    "Slug": "denmark",
    "ISO2": "DK"
  },
  {
    "Country": "Hungary",
    "Slug": "hungary",
    "ISO2": "HU"
  },
  {
    "Country": "Mauritius",
    "Slug": "mauritius",
    "ISO2": "MU"
  },
  {
    "Country": "Bangladesh",
    "Slug": "bangladesh",
    "ISO2": "BD"
  },
  {
    "Country": "Saint Lucia",
    "Slug": "saint-lucia",
    "ISO2": "LC"
  },
  {
    "Country": "Spain",
    "Slug": "spain",
    "ISO2": "ES"
  },
  {
    "Country": "Papua New Guinea",
    "Slug": "papua-new-guinea",
    "ISO2": "PG"
  },
  {
    "Country": "Russian Federation",
    "Slug": "russia",
    "ISO2": "RU"
  },
  {
    "Country": "Turkey",
    "Slug": "turkey",
    "ISO2": "TR"
  },
  {
    "Country": "Albania",
    "Slug": "albania",
    "ISO2": "AL"
  },
  {
    "Country": "Canada",
    "Slug": "canada",
    "ISO2": "CA"
  },
  {
    "Country": "Honduras",
    "Slug": "honduras",
    "ISO2": "HN"
  },
  {
    "Country": "Botswana",
    "Slug": "botswana",
    "ISO2": "BW"
  },
  {
    "Country": "Jamaica",
    "Slug": "jamaica",
    "ISO2": "JM"
  },
  {
    "Country": "Niger",
    "Slug": "niger",
    "ISO2": "NE"
  },
  {
    "Country": "Guatemala",
    "Slug": "guatemala",
    "ISO2": "GT"
  },
  {
    "Country": "New Caledonia",
    "Slug": "new-caledonia",
    "ISO2": "NC"
  },
  {
    "Country": "Kazakhstan",
    "Slug": "kazakhstan",
    "ISO2": "KZ"
  },
  {
    "Country": "Moldova",
    "Slug": "moldova",
    "ISO2": "MD"
  },
  {
    "Country": "Tanzania, United Republic of",
    "Slug": "tanzania",
    "ISO2": "TZ"
  },
  {
    "Country": "Jersey",
    "Slug": "jersey",
    "ISO2": "JE"
  },
  {
    "Country": "Korea (North)",
    "Slug": "korea-north",
    "ISO2": "KP"
  },
  {
    "Country": "Monaco",
    "Slug": "monaco",
    "ISO2": "MC"
  },
  {
    "Country": "Algeria",
    "Slug": "algeria",
    "ISO2": "DZ"
  },
  {
    "Country": "Cambodia",
    "Slug": "cambodia",
    "ISO2": "KH"
  },
  {
    "Country": "Heard and Mcdonald Islands",
    "Slug": "heard-and-mcdonald-islands",
    "ISO2": "HM"
  },
  {
    "Country": "Korea (South)",
    "Slug": "korea-south",
    "ISO2": "KR"
  },
  {
    "Country": "Poland",
    "Slug": "poland",
    "ISO2": "PL"
  },
  {
    "Country": "Azerbaijan",
    "Slug": "azerbaijan",
    "ISO2": "AZ"
  },
  {
    "Country": "China",
    "Slug": "china",
    "ISO2": "CN"
  },
  {
    "Country": "Equatorial Guinea",
    "Slug": "equatorial-guinea",
    "ISO2": "GQ"
  },
  {
    "Country": "Guam",
    "Slug": "guam",
    "ISO2": "GU"
  },
  {
    "Country": "Solomon Islands",
    "Slug": "solomon-islands",
    "ISO2": "SB"
  },
  {
    "Country": "British Virgin Islands",
    "Slug": "british-virgin-islands",
    "ISO2": "VG"
  },
  {
    "Country": "Jordan",
    "Slug": "jordan",
    "ISO2": "JO"
  },
  {
    "Country": "Montserrat",
    "Slug": "montserrat",
    "ISO2": "MS"
  },
  {
    "Country": "Swaziland",
    "Slug": "swaziland",
    "ISO2": "SZ"
  },
  {
    "Country": "Bhutan",
    "Slug": "bhutan",
    "ISO2": "BT"
  },
  {
    "Country": "Norway",
    "Slug": "norway",
    "ISO2": "NO"
  },
  {
    "Country": "Turkmenistan",
    "Slug": "turkmenistan",
    "ISO2": "TM"
  },
  {
    "Country": "Slovakia",
    "Slug": "slovakia",
    "ISO2": "SK"
  },
  {
    "Country": "Uganda",
    "Slug": "uganda",
    "ISO2": "UG"
  },
  {
    "Country": "Costa Rica",
    "Slug": "costa-rica",
    "ISO2": "CR"
  },
  {
    "Country": "Rwanda",
    "Slug": "rwanda",
    "ISO2": "RW"
  },
  {
    "Country": "Barbados",
    "Slug": "barbados",
    "ISO2": "BB"
  },
  {
    "Country": "French Guiana",
    "Slug": "french-guiana",
    "ISO2": "GF"
  },
  {
    "Country": "Lao PDR",
    "Slug": "lao-pdr",
    "ISO2": "LA"
  },
  {
    "Country": "Latvia",
    "Slug": "latvia",
    "ISO2": "LV"
  },
  {
    "Country": "Mayotte",
    "Slug": "mayotte",
    "ISO2": "YT"
  },
  {
    "Country": "Qatar",
    "Slug": "qatar",
    "ISO2": "QA"
  },
  {
    "Country": "Brunei Darussalam",
    "Slug": "brunei",
    "ISO2": "BN"
  },
  {
    "Country": "Comoros",
    "Slug": "comoros",
    "ISO2": "KM"
  },
  {
    "Country": "Dominican Republic",
    "Slug": "dominican-republic",
    "ISO2": "DO"
  },
  {
    "Country": "Serbia",
    "Slug": "serbia",
    "ISO2": "RS"
  },
  {
    "Country": "French Polynesia",
    "Slug": "french-polynesia",
    "ISO2": "PF"
  },
  {
    "Country": "Saint-Barthélemy",
    "Slug": "saint-barthélemy",
    "ISO2": "BL"
  },
  {
    "Country": "Switzerland",
    "Slug": "switzerland",
    "ISO2": "CH"
  },
  {
    "Country": "Georgia",
    "Slug": "georgia",
    "ISO2": "GE"
  },
  {
    "Country": "Sri Lanka",
    "Slug": "sri-lanka",
    "ISO2": "LK"
  },
  {
    "Country": "Uruguay",
    "Slug": "uruguay",
    "ISO2": "UY"
  },
  {
    "Country": "South Georgia and the South Sandwich Islands",
    "Slug": "south-georgia-and-the-south-sandwich-islands",
    "ISO2": "GS"
  },
  {
    "Country": "Uzbekistan",
    "Slug": "uzbekistan",
    "ISO2": "UZ"
  },
  {
    "Country": "Haiti",
    "Slug": "haiti",
    "ISO2": "HT"
  },
  {
    "Country": "Lesotho",
    "Slug": "lesotho",
    "ISO2": "LS"
  }
];
