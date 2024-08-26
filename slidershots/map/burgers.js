const burgers = [
['quarterdeck','Quarterdeck','August 25, 2024',2,'26.101990753923072','-80.13247581061746'],
['white-manna','White Manna','February 22, 2024',3,'40.889196728709585','-74.03842516427876'],
['harrys','Harry&rsquo;s','January 10, 2024',3,'26.71065587356648','-80.05683652525133'],
['traderjoes2','Trader Joe&rsquo;s (Frozen)','November 17, 2023',2,'26.843852128229404','-80.07420328458258'],
['711','7-Eleven','March 18, 2022',2,'26.72437370166874','-80.07929132211815'],
['stadiumgrill','Stadium Grill','September 26, 2021',2,'26.88989636953776','-80.11584224107268'],
['hooters','Hooters','March 21, 2021',2,'26.714966430145072','-80.09244862810135'],
['drpraegers','Dr. Praeger&rsquo;s (Frozen)','March 7, 2021',1,'26.710744747320437','-80.05754122500839'],
['whitecastle2','White Castle (Frozen)','January 11, 2021',2,'26.933160371662474','-80.07731271542005'],
['lindburgers-express','Lindburgers Express','September 22, 2020',3,'26.714286143000862','-80.05320320588541'],
['bjs2','BJ&rsquo;s','September 19, 2020',2,'26.72267842753985','-80.08695833385933'],
['lindburgers','Lindburgers','February 26, 2020',1,'26.935009025337813','-80.1240623709228'],
['dave-busters','Dave & Buster&rsquo;s','December 9, 2019',1,'28.43626572593181','-81.47320603460714'],
['square-grouper','Square Grouper','October 21, 2019',2,'26.94575555718551','-80.0815613697317'],
['1000-north','1000 North','August 14, 2019',2,'26.944915495828752','-80.08579875515906'],
['sinclairs-sidebar','Sinclair&rsquo;s Sidebar','November 30, 2018',2,'26.93420680900667','-80.06938766940544'],
['foodshack','Food Shack','October 4, 2018',2,'26.93248239057471','-80.07780292389928'],
['yardhouse2','Yard House','June 1, 2018',3,'26.8473807739392','-80.09339724885363'],
['duffys2','Duffy&rsquo;s','May 9, 2018',2,'26.84576295933399','-80.0593569622614'],
['hardees','Hardee&rsquo;s','November 28, 2017',1,'30.22049694457546','-81.56700108384695'],
['gardein','Gardein (Frozen)','October 3, 2017',1,'28.032372505487036','-80.61991509325806'],
['liquorstore','The Liquor Store','August 23, 2017',3,'45.516571091832155','-122.63000612350855'],
['krystal2','Krystal','August 18, 2017',2,'31.219008171028133','-81.52147126042948'],
['onlyburger2','Only Burger','April 17, 2017',1,'35.95584144835355','-78.95621476783259'],
['sagebrush','Sagebrush Steakhouse','October 20, 2016',2,'35.29947760029691','-78.600665727905'],
['carolinabrewery2','Carolina Brewery','May 22, 2016',2,'35.91069386865315','-79.06279105945886'],
['silverspot','Silverspot Cinema / Trilogy','March 11, 2016',1,'35.92827244006925','-79.02823238419916'],
['northside-district','The Northside District','February 20, 2016',2,'35.91145255129142','-79.06252306583876'],
['lunchables','Lunchables','December 21, 2015',0,'35.912260325302995','-79.07092170087387'],
['clubhouseone','Clubhouse One','September 7, 2015',3,'25.797345852273835','-80.27704871860402'],
['arbys2','Arby&rsquo;s','August 24, 2015',2,'35.9178119020434','-79.09558022489733'],
['onlyburger','Only Burger','March 25, 2015',2,'35.95584144835355','-78.95621476783259'],
['carolinabrewery','Carolina Brewery','March 5, 2015',1,'35.91069386865315','-79.06279105945886'],
['lindas','Linda&rsquo;s','February 17, 2015',3,'35.91452688050935','-79.05273020840814'],
['walmart3','Walmart (Frozen)','December 17, 2014',3,'35.85875950392117','-79.08179065635873'],
['goldencorral','Golden Corral','October 9, 2014',1,'33.96195160962377','-78.41818374504889'],
['jimmydean','Jimmy Dean (Frozen)','September 23, 2014',2,'35.912260325302995','-79.07092170087387'],
['mark','Mark','June 29, 2014',3,'40.728992325009784','-73.9881477333094'],
['walmart2','Walmart (Frozen)','June 4, 2014',1,'35.85875950392117','-79.08179065635873'],
['altaclub','Altadena Town & Country Club','April 5, 2014',3,'34.18507405489342','-118.12178833772008'],
['tylers','Tyler&rsquo;s','March 15, 2014',2,'35.910213887078314','-79.07197168159972'],
['hickorytavern','Hickory Tavern','January 29, 2014',1,'35.91031384917845','-79.06755519259886'],
['cariboucoffee','Caribou Coffee','January 12, 2014',3,'35.928691550022805','-79.03403281902736'],
['thepub','Monte Carlo Pub','December 16, 2013',2,'36.104923164071764','-115.17370224531966'],
['holsteins','Holsteins','December 13, 2013',2,'36.10982433358595','-115.17448275262475'],
['champps2','Champps','October 3, 2013',3,'35.90510038605661','-78.94438644424756'],
['fitzgeralds','Fitzgerald&rsquo;s','September 9, 2013',1,'35.91233390288894','-79.05887656118881'],
['schuberts','Sister Schubert&rsquo;s (Frozen)','September 1, 2013',1,'35.912260325302995','-79.07092170087387'],
['marketgarden','Market Garden','August 2, 2013',2,'41.485070553018375','-81.70343254481257'],
['sheetz','Sheetz','June 8, 2013',2,'35.80915284176827','-78.82164513937944'],
['champps','Champps','May 3, 2013',2,'35.90510038605661','-78.94438644424756'],
['tobaccoroad','Tobacco Road','April 29, 2013',1,'35.907340118940276','-79.02239736244611'],
['arbys','Arby&rsquo;s','April 12, 2013',2,'35.902483792029535','-78.89363913835473'],
['burgerdot','Burger.','March 15, 2013',3,'36.966936496623084','-122.04028248015022'],
['heart','I &hearts; Burgers','December 9, 2012',3,'36.12397112422678','-115.16856589958573'],
['walmart','Walmart (Frozen)','September 19, 2012',1,'35.954966642096025','-78.9990242581248'],
['target','Target (Frozen)','July 21, 2012',1,'35.90273401416155','-78.95660919122213'],
['me4','Me','July 13, 2012',2,'35.91157681182837','-79.08053040860098'],
['yourstruly','Yours Truly','May 14, 2012',3,'41.48350203561016','-81.58957558884495'],
['rubytuesday','Ruby Tuesday','January 7, 2012',2,'26.848709257420314','-80.08398819341863'],
['rubirosa','Rubirosa','December 16, 2011',3,'40.72275094948148','-73.99613799966951'],
['corners','Corners','December 1, 2011',1,'26.934548738389722','-80.09250715827223'],
['steaknshake','Steak &rsquo;N Shake','November 10, 2011',3,'27.236415705656867','-80.26965426492448'],
['duffys','Duffy&rsquo;s','October 28, 2011',1,'26.934568297456114','-80.08973961649173'],
['toojays','Toojay&rsquo;s','October 26, 2011',2,'26.84957762116216','-80.09479465972343'],
['grease','Grease','October 23, 2011',3,'26.71350275023884','-80.05123955700111'],
['guanabanas','Guanabanas','September 23, 2011',1,'26.942621203242997','-80.0810172782164'],
['chilis2','Chili&rsquo;s','September 4, 2011',2,'26.9345741668522','-80.08062445450813'],
['yardhouse','Yard House','August 28, 2011',3,'26.8473807739392','-80.09339724885363'],
['krystal','Krystal','August 17, 2011',2,'29.17807337583582','-81.08187389265797'],
['bkchicken','Burger King','August 7, 2011',1,'30.130463455453523','-94.01560481186254'],
['kgb','KGB','August 2, 2011',2,'36.119529260400355','-115.17177904489019'],
['counterspecial','The Counter','July 17, 2011',3,'37.426775752536116','-122.14427267267381'],
['mogo','MoGo Food Truck','June 27, 2011',1,'37.447932256140675','-122.12587529278373'],
['opchicken','Old Pro','June 12, 2011',1,'37.44489846183649','-122.16129792203148'],
['tgiffrozen','TGI Friday&rsquo;s (Frozen)','June 7, 2011',2,'37.45055683552512','-122.17915863842703'],
['burgerlicious','Burgerlicious','June 4, 2011',2,'37.48575378555557','-122.22885456471298'],
['awillys3','Armadillo Willy&rsquo;s','March 12, 2011',3,'37.400394540631545','-122.11392424781079'],
['burgermeister','Burger Meister','Feburary 24, 2011',2,'37.801629984443686','-122.41234375928691'],
['epicenter','Epicenter Cafe','January 13, 2011',3,'37.78151092267029','-122.39899043621651'],
['creamery','Palo Alto Creamery','November 27, 2010',2,'37.443856321917835','-122.16176191270013'],
['jollibee','Jollibee','November 23, 2010',2,'37.78305242559842','-122.40272716273128'],
['blt','BLT Burger','October 16, 2010',2,'36.12111869187184','-115.1745849007722'],
['fosterfarms','Foster Farms (Frozen)','October 8, 2010',2,'37.45055683552512','-122.17915863842703'],
['weightwatchers','Weight Watchers (Frozen)','September 30, 2010',0,'37.45055683552512','-122.17915863842703'],
['me3','Me','September 6, 2010',3,'37.419674879144466','-122.15111364659279'],
['bostonmkt2','Boston Market','September 6, 2010',1,'37.42007358812066','-122.13582521934565'],
['hotpockets','Hot Pockets (Frozen)','August 26, 2010',1,'37.78525402489072','-122.40625917147433'],
['bostonmkt','Boston Market','August 12, 2010',1,'37.42007358812066','-122.13582521934565'],
['urbun','Urbun Burger','July 20, 2010',2,'37.76369418136418','-122.42154017442957'],
['mossbeach','Moss Beach Distillery','July 10, 2010',1,'37.517766600684','-122.51287232658365'],
['sliderbar','Slider Bar Cafe','May 22, 2010',1,'37.44616883461898','-122.16098105680342'],
['awillys','Armadillo Willy&rsquo;s','May 8, 2010',1,'37.365834322387464','-122.0287042799498'],
['fatangel','Fat Angel','March 5, 2010',3,'37.78339518307484','-122.4331768471666'],
['me2','Me','January 17, 2010',3,'37.419674879144466','-122.15111364659279'],
['burgerbar','Burger Bar','December 1, 2009',2,'37.787317566493385','-122.40742704653688'],
['redrobin','Red Robin','November 22, 2009',3,'37.639124956864535','-122.41935017043956'],
['southernhospitality','Southern Hospitality BBQ','September 28, 2009',2,'40.771494806254076','-73.95607211907085'],
['nolas','Nola','September 20, 2009',3,'37.44493043058797','-122.16143065408416'],
['parents','My Parents','September 18, 2009',3,'37.43478826965491','-122.14179928744234'],
['bestoburger','Best-O-Burger','September 15, 2009',0,'37.791635352448594','-122.40394078618661'],
['maltshop','The Malt Shop','August 14, 2009',2,'44.91219968419671','-93.29010020035511'],
['fb4','Facebook','July 31, 2009',2,'37.416228233533054','-122.15202793374606'],
['chickfila','Chick-Fil-A','July 19, 2009',3,'33.64094092390613','-84.4394588299469'],
['jitbchicken','Jack in the Box','June 21, 2009',2,'37.425508631722174','-122.14711733556653'],
['fb3','Facebook','June 8, 2009',3,'37.416228233533054','-122.15202793374606'],
['fb2','Facebook','May 28, 2009',1,'37.416228233533054','-122.15202793374606'],
['bjs','BJ&rsquo;s','May 27, 2009',2,'37.33129892884801','-122.0318184112273'],
['thirstybear','Thirsty Bear','May 15, 2009',2,'37.785475573936246','-122.39962308151645'],
['chilis','Chili&rsquo;s','May 8, 2009',0,'34.13984443056845','-118.01271585066955'],
['bk','Burger King','May 7, 2009',1,'34.992146626168044','-118.94146602245442'],
['montecarlo','Monte Carlo Pub','April 18, 2009',3,'36.104923164071764','-115.17370224531966'],
['jitb','Jack in the Box','April 12, 2009',3,'37.46760323759934','-122.20912712439986'],
['whitecastlefrozen','White Castle (Frozen)','April 9, 2009',2,'37.45055683552512','-122.17915863842703'],
['awillyspork','Armadillo Willy&rsquo;s','March 26, 2009',2,'37.365834322387464','-122.0287042799498'],
['me','Me','March 15, 2009',2,'37.45353960796607','-122.16918168442677'],
['elephantbar','Elephant Bar','February 13, 2009',1,'34.08484546461737','-117.69726773149284'],
['bkbreakfast','Burger King','February 7, 2009',3,'37.31983578702202','-121.97387474724468'],
['fb','Facebook','February 4, 2009',2,'37.44365516158107','-122.16351136963416'],
['esmerelda','La Esmeralda','July 20, 2008',3,'39.25074840148649','-119.95061807826873'],
['ccf2','Cheesecake Factory','May 15, 2008',2,'37.447121465493645','-122.16092803659382'],
['ccf','Cheesecake Factory','May 11, 2008',3,'37.447121465493645','-122.16092803659382'],
['tgif','TGI Friday&rsquo;s','May 4, 2008',3,'37.32817925112514','-122.01485758544783'],
['gordonbiersch','Gordon Biersch','May 2, 2008',2,'37.44332215069015','-122.16102367390377'],
['traderjoes','Trader Joe&rsquo;s (Frozen)','March 16, 2008',2,'37.451251845074346','-122.18354578420146'],
['oldpro','Old Pro','February 20, 2008',3,'37.44489846183649','-122.16129792203148'],
['counter','The Counter','January 20, 2008',2,'37.426775752536116','-122.14427267267381']
];