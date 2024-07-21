const bees = [
  ['alabamajacks','Alabama Jacks','April 2, 2024','25.29160458986293','-80.37890367923984'],
  ['rubell','Rubell Museum','March 29, 2024','25.798883485719692','-80.2140542310694'],
  ['rhythmvine','Rhythm &amp; Vine','February 4, 2024','26.126769359380237','-80.1378914733866'],
  ['lagunilla','La Lagunilla','January 21, 2024','19.446359999200276','-99.13588610746446'],
  ['ralphs','Ralph&rsquo;s Stand Up Bar','December 31, 2023','26.942197221484733','-80.09421921133331'],
  ['dunedogs','Dune Dog','December 31, 2023','26.940770873732713','-80.09268412876278'],
  ['boardroom','Boardroom','September 24, 2023','26.169274403160298','-80.09870616266404'],
  ['robbfield','Robb Field Skate Park','May 21, 2023','32.75607985103653','-117.23656554880112'],
  ['kims','Kim&rsquo;s Alley Bar','April 16, 2023','26.136915848706735','-80.12100612154099'],
  ['rinconpoint','Rincon Point','March 28, 2023','34.37537066836366','-119.4759540929529'],
  ['oilpiers','Oil Piers Beach','March 28, 2023','34.35226199564675','-119.42758135129311'],
  ['tatara','Tatara Bridge Observation Deck','March 25, 2023','34.257024709355186','133.0550033180662'],
  ['oskarblues','Oskar Blues Home Made Liquids &amp; Solids','July 5, 2022','40.139177304335036','-105.13147516434299'],
  ['brewhousegallery','Brewhouse Gallery','June 10, 2022','26.799116731721643','-80.06724683520548'],
  ['pigeonkey','Pigeon Key','April 1, 2022','24.704320668849835','-81.15598359162762'],
  ['abitamystery','Abita Mystery House','December 31, 2021','30.477447701262687','-90.03612394589253'],
  ['sundownsaloon','Sundown Saloon','December 26, 2021','40.01768122762726','-105.2802730037742'],
  ['rockhall','Rock &amp; Roll Hall of Fame','July 19, 2021','41.50778914965965','-81.69524512208243'],
  ['idle','The Idle','July 15, 2021','39.75544925006545','-86.14418338110228'],
  ['broadripple','Rainbow Bridge','July 15, 2021','39.8714900241384','-86.1426530926364'],
  ['burtreynolds','Burt Reynolds Park','March 18, 2020','26.940504930264776','-80.08488883190904'],
  ['jwakefield','J Wakefield Brewing','February 6, 2020','25.79985858595852','-80.19695430488606'],
  ['bbanjo','Bangin&rsquo; Banjo Brewing Company','January 25, 2020','26.26954007203799','-80.15527047973849'],
  ['chi66','Chicago, IL','November 13, 2019','41.87785802299996','-87.65069599908405'],
  ['marinestadium','Miami Marine Stadium','September 18, 2019','25.742814667753265','-80.1700680428771'],
  ['tasteofmaine','Taste of Maine','August 3, 2019','43.920746160971596','-69.79909068145827'],
  ['a1a2','North Palm Beach, FL','June 4, 2019','26.859880975339987','-80.05593388888876'],
  ['civilsociety','Civil Society','June 2, 2019','26.697470162966244','-80.05533061967087'],
  ['wendys','Wendy&rsquo;s','March 22, 2019','26.933767348337845','-80.10374546013936'],
  ['catos','Oakland, CA','March 2, 2019','37.826472897479796','-122.25382872769563'],
  ['foodshack','Food Shack','January 13, 2019','26.932638019669877','-80.07720018950518'],
  ['macsclub','Mac&rsquo;s Club Deuce','December 26, 2018','25.78543020984289','-80.13124081229347'],
  ['beertrade','Beer Trade Co','December 1, 2018','26.46460941176419','-80.06795092444173'],
  ['brassring','The Brass Ring Pub','November 27, 2018','26.80596144291702','-80.05500895943383'],
  ['wynwood','Wynwood','July 30, 2018','25.80059468776025','-80.19915065860145'],
  ['umich','Denison Archway<br>University of Michigan','July 8, 2018','42.27547473821955','-83.73637794846023'],
  ['lighthousecove','Lighthouse Cove Adventure Golf','December 28, 2017','26.93903014150556','-80.07744064450563'],
  ['niagara','Horseshoe Falls','November 13, 2017','43.07998014053906','-79.0783156236125'],
  ['gramps','Gramps','October 21, 2017','25.800141173073467','-80.19831121970007'],
  ['folsomprison','Folsom Prison','August 27, 2017','38.68713922842306','-121.16988580454196'],
  ['nimbusdam','Nimbus Dam','August 27, 2017','38.635910772532355','-121.22513012862366'],
  ['vernoniamill','Old Saw Mill','August 25, 2017','45.85481532490376','-123.17707970393555'],
  ['banksvernonia','Banks-Vernonia State Trail','August 25, 2017','45.840307234852936','-123.21232859673826'],
  ['springwater','Springwater Corridor','August 23, 2017','45.48088140872373','-122.654735023939'],
  ['squirescastle','Squire&rsquo;s Castle','July 15, 2017','41.580190706271374','-81.41923488835158'],
  ['lakemichigan','Lake Michigan','July 2, 2017','45.091463618519875','-85.36562150491858'],
  ['sidelinghill','Sideling Hill Tunnel','June 12, 2017','40.04962976301754','-78.14113421804666'],
  ['shhs','Shaker Heights, OH','May 30, 2017','41.47255950857963','-81.5682167594235'],
  ['lakemarion','Lake Marion','May 9, 2017','33.51916978619703','-80.43557500611547'],
  ['birdhouse','Durham, NC','April 20, 2017','35.94351269258998','-78.99675891203444'],
  ['pinhook','Pinhook','March 14, 2017','35.99551054189661','-78.90072512777452'],
  ['hawriver','Old Bynum Bridge','February 19, 2017','35.772879823538275','-79.14385338035393'],
  ['surfclub','Surf Club','January 12, 2017','36.002186159275475','-78.90013605937327'],
  ['fuelfuddle','Fuel and Fuddle','November 29, 2016','40.44131727969975','-79.95660763073734'],
  ['captaintonys','Captain Tony&rsquo;s','October 16, 2016','24.558889298730133','-81.80551603228878'],
  ['mile02','Mile 0','October 15, 2016','24.555267279523974','-81.80392133164511'],
  ['slipperynoodle','Slippery Noodle Inn','September 28, 2016','39.76176427697445','-86.1585215191307'],
  ['buddysrun','Buddy&rsquo;s Run','September 18, 2016','36.57327471481505','-81.61334240883224'],
  ['dutchboy','Dutch Boy Burger','June 26, 2016','40.6723126978027','-73.95787122505746'],
  ['tinyhouse','Carrboro, NC','May 26, 2016','35.91727647050922','-79.08193722607305'],
  ['station2','The Station','May 15, 2016','35.910849405053085','-79.07005083780781'],
  ['flattop','Flat Top Fire Tower','March 26, 2016','36.16253660207668','-81.67689834878841'],
  ['thecave','The Cave','February 17, 2016','35.91074867140839','-79.06249388014666'],
  ['greenman','Green Man Brewery','December 19, 2015','35.588760682085656','-82.55228395261189'],
  ['amona','Telang Family Home','November 22, 2015','15.531012966179494','73.9799964311404'],
  ['mangueshi','Shree Mangueshi Temple','November 22, 2015','15.444961735762961','73.96698190756192'],
  ['sjstudios','SJ Studios','November 17, 2015','19.107165350122514','72.8910948302287'],
  ['labocana','La Bocana','September 6, 2015','13.493303735984712','-89.38532390733867'],
  ['ikes','Ike&rsquo;s Place','April 18, 2015','37.764268368573795','-122.43060487622853'],
  ['a1a','A1A &amp; Indiantown','October 29, 2014','26.934019746543353','-80.07239714585961'],
  ['westashley','West Ashley Greenway','October 15, 2014','32.795841596752226','-80.09515077456336'],
  ['attbridge','American Tobacco Trail Bridge','October 1, 2014','35.90990817422725','-78.94174093178897'],
  ['tompkinssquare','Tompkins Square Park','June 29, 2014','40.72670985989075','-73.9829591064313'],
  ['magnettheater','Magnet Theater','June 28, 2014','40.74878919700379','-73.99531179582674'],
  ['sushicruise','Sushi Cruise','April 5, 2014','34.106719310001765','-117.73332132886657'],
  ['lasvegas','Tropicana Avenue','December 15, 2013','36.100990079097556','-115.17295758756697'],
  ['cedarpoint','Cedar Point','August 3, 2013','41.48098445122808','-82.67975917392842'],
  ['adamstract','Adams Tract','May 7, 2013','35.92446846258154','-79.0743658792182'],
  ['zzyzxsign','CA I-15 &ndash; Exit 239','March 17, 2013','35.19478064974437','-116.1463246120961'],
  ['fathersoffice','Father&rsquo;s Office','March 15, 2013','34.029421451852315','-118.49841988219951'],
  ['butter','Butter','March 13, 2013','37.77137379894603','-122.4132669126385'],
  ['506','Local 506','February 2, 2013','35.91020668910713','-79.06382420100417'],
  ['southernrail','Southern Rail','January 16, 2013','35.911070475623646','-79.07007144382584'],
  ['willington','Willington, SC','November 22, 2012','33.971802821581626','-82.46700784988496'],
  ['nightlight','Night Light','November 5, 2012','35.91152785532017','-79.06256522238988'],
  ['parthenon','Parthenon','October 5, 2012','36.149417955626255','-86.81347723712925'],
  ['secondwind','Second Wind','September 14, 2012','35.9104520356967','-79.07048662549396'],
  ['piggly','Piggly Wiggly','August 21, 2012','32.503987752797656','-80.29764615639438'],
  ['nortons','Norton Rat&rsquo;s Tavern','July 4, 2012','-13.517052047338431','-71.97756981263014'],
  ['ollantaytambo','Ollantaytambo','July 4, 2012','-13.256563028348042','-72.26494474421828'],
  ['qenqo','Q&rsquo;enqo','July 2, 2012','-13.505790042350439','-71.96727204502488'],
  ['daves','Dave&rsquo;s Cosmic Subs','May 14, 2012','41.48723591528575','-81.5347558959436'],
  ['station','The Station','May 10, 2012','35.91084653286216','-79.0700440896404'],
  ['carrboro','Carrboro, NC','May 2, 2012','35.911960414810785','-79.08056659078477'],
  ['mudd','Mudd Dorm<br>Pomona College','Apr 29, 2012','34.0959730495569','-117.71285472477383'],
  ['lindas','Linda&rsquo;s','Apr 10, 2012','35.91452674404231','-79.0527309781644'],
  ['highline','The High Line','Dec 18, 2011','40.749066653104144','-74.0039022146763'],
  ['jupiterinlet','Jupiter, FL','Nov 27, 2011','26.945987130263852','-80.08513633419264'],
  ['mile0','Mile 0','Nov 18, 2011','24.555202207150003','-81.80402834438787'],
  ['duffys','Duffy&rsquo;s','Nov 12, 2011','26.93465582221564','-80.08979519221863'],
  ['outback','Outback Steakhouse','Nov 4, 2011','26.93267892533809','-80.07917427321983'],
  ['miamibeach','Miami Beach','Sep 22, 2011','25.781807671654214','-80.13134664093319'],
  ['squaregrouper','Square Grouper','Sep 6, 2011','26.945733998700916','-80.08153337833765'],
  ['bourbonst','Bourbon Street','Aug 8, 2011','29.955542931742706','-90.06844873341817'],
  ['pradamarfa','Prada Marfa','Aug 5, 2011','30.603437929110967','-104.51855791753216'],
  ['greenwichsteps','Greenwich Steps','Nov 24, 2010','37.803026016300365','-122.40434642811584'],
  ['palazzo','Palazzo','Oct 17, 2010','36.12338064861227','-115.17005825234166'],
  ['facebook','Building 6<br>Facebook','Sep 28, 2010','37.419565174803864','-122.14725885847506'],
  ['rosecrown','The Rose &amp; Crown','Jul 11, 2010','37.44447259737011','-122.16180080658859'],
  ['stpeters','St. Peter&rsquo;s Square','Jul 3, 2010','41.90220591659493','12.459148633814007'],
  ['boboli','Boboli Gardens','Jun 29, 2010','43.764277236939556','11.25240277781645'],
  ['aquarius','Aquarius Theater','May 1, 2010','37.44495084818993','-122.16369168994427'],
  ['fortmason','Fort Mason','Apr 15, 2010','37.80846484637621','-122.43123790089264'],
  ['twitter','Twitter HQ','Mar 22, 2010','37.78223162889834','-122.40062978481802'],
  ['fatangel','Fat Angel','Mar 20, 2010','37.783386089593854','-122.43318423466621'],
  ['nepenthe','Nepenthe','Feb 13, 2010','36.222565451233','-121.75949048733057'],
  ['zzyzx','Zzyzx, CA','Oct 26, 2009','35.143684692564825','-116.10669661637783'],
  ['lostlake','Lost Lake','Oct 26, 2009','34.272183707019735','-117.46587299685483'],
  ['crifdogs','Crif Dogs','Sep 25, 2009','40.727092022268906','-73.98374970515556'],
  ['sutrobaths','Sutro Baths','Aug 29, 2009','37.780680228819264','-122.51174385493576'],
  ['500','500 Ocean Trail','Jul 20, 2009','26.935179001084567','-80.0712219491481'],
  ['publix','Publix','Jul 19, 2009','26.933510574787668','-80.07731715279103'],
  ['pebblebeach','Hole 4<br>Peter Hay Golf Course','Jun 13, 2009','36.57101722884543','-121.94982086335258'],
  ['lockspotcafe','Lockspot Cafe','May 25, 2009','47.66782556083244','-122.39606630671227'],
  ['fremonttroll','Fremont Troll','May 25, 2009','47.65107180756606','-122.34753032019053'],
  ['bottomhill','Bottom of the Hill','May 9, 2009','37.765103587493044','-122.39645300317494'],
  ['rinconisland','Rincon Island Causeway','May 8, 2009','34.35554630644395','-119.44276549730168'],
  ['pyramidlake','Pyramid Lake','May 7, 2009','34.66298185627355','-118.7608351257839'],
  ['pomonabaseball','Pomona College Baseball Field','May 7, 2009','34.09859352580452','-117.71129920932604'],
  ['pomonacarnegie','Carnegie Building<br>Pomona College','May 7, 2009','34.09809725532406','-117.71535123625023']
];