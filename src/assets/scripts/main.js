import "core-js/stable";
import "regenerator-runtime/runtime";

import { Scroll } from './_app/cuchillo/scroll/Scroll';
import { VSticky } from './_app/cuchillo/scroll/insiders/VSticky';
import { VScaleZero } from './_app/cuchillo/scroll/insiders/VScaleZero';
import { VScale } from './_app/cuchillo/scroll/insiders/VScale';
import { VInsider } from './_app/cuchillo/scroll/insiders/VInsider';
import { VDisplace } from './_app/cuchillo/scroll/insiders/VDisplace';
import { VInsiderMask } from './_app/cuchillo/scroll/insiders/VInsiderMask';

import { Keyboard } from './_app/cuchillo/core/Keyboard';
import { Basics, isDebug, isMobile, isTouch } from './_app/cuchillo/core/Basics';
import { Accessibility } from './_app/cuchillo/core/Accessibility';
import { Statics } from './_app/cuchillo/utils/Statics';

import LoaderController from './_app/cuchillo/loaders/LoaderController';
import PagesLoader from './_app/cuchillo/loaders/PagesLoader';
import MediaLoader from './_app/cuchillo/loaders/MediaLoader';
import { ControllerPage } from './_app/cuchillo/pages/ControllerPage';
import { Metrics } from './_app/cuchillo/core/Metrics';
import Default from './pages/Default';
import Legal from './pages/Legal';
import EventDispatcher from './_app/cuchillo/core/EventDispatcher';
import Page from './_app/cuchillo/pages/Page';
import { Interaction, MrInteraction } from './_app/cuchillo/core/Interaction';
import { gsap } from "gsap";
import { ControllerWindow } from './_app/cuchillo/windows/ControllerWindow';
import Win from './_app/cuchillo/windows/Window';

import Wrap from './layout/Wrap';
import InterfaceCanvas from './_app/cuchillo/layout/InterfaceCanvas';
import Loading from './layout/Loading';
import BG from './_app/cuchillo/layout/Background';
import Cookies from './windows/Cookies';

import { ScrollItem__SliderScrollHorizontal } from './scroll/ScrollItem__SliderScrollHorizontal';
import { ScrollItem__ABC } from './scroll/ScrollItem__ABC';
import { ScrollItem__Town } from './scroll/ScrollItem__Town';
import WinSidemenu from "./windows/Sidemenu";
import { isThisSecond } from "date-fns";
import ScrollTop from "./modules/ScrollTop";
import Header from "./layout/Header";
import { GetBy } from "./_app/cuchillo/core/Element";

export default class Main {
  static scrollbar;
  static stats;
  static data = 'ABADIÑO_001_CALLE ANDRA MARI KALEA_002_MARTXOAREN ZORTZIKO KALEA / CALLE OCHO DE MARZO_003_ CALLE TERESA DE LARIZ KALEA_004_ERMITA ANDRA MARI BASELIZA_005_ERMITA SANTA EUFEMIA BASELIZA _006_PIETATEA ESKULTURA / ESCULTURA LA PIEDAD_ABANTO - ZIEBENA_007_PLAZA DOLORES IBARRURI PLAZA_008_PILAR ALBIN MAISTRAREN PLAZA / PLAZA MAESTRA PILAR ALBIN_009_GRUPO MARIA AUXILIADORA ETXETALDEA_010_GRUPO SANTA BARBARA ETXETALDEA_011_BARRIO SANTA JULIANA AUZOA_012_BARRIO SANTA LUZIA AUZOA_013_URBANIZACIÓN LA MAGDALENA URBANIZAZIOA_014_PARQUE DOLORES IBARRURI PARKEA_015_ERMITA DE SANTA KATALINA BASELIZA_016_ABANTOKO SANTA JULIANA ELIZA / IGLESIA DE SANTA JULIANA DE ABANTO_017_IGLESIA SANTA LUZIA ELIZA_018_IES DOLORES IBARRURI BHI_019_ESCULTURA DOLORES IBARRURI ESKULTURA_ALONSOTEGI_020_PLAZA ANDRA MARI PLAZA_021_CALLE NUESTRA SEÑORA DE LA GUIA KALEA_022_ERMITA SANTA KITERIA BASELIZA_023_GIDAKO AMA BIRJINA BASELIZA / ERMITA DE NUESTRA SEÑORA DE LA GUÍA_AMOEBIETA - ETXANO_024_ANDRAMARIKO PLAZA / PLAZA DE ANDRAMARI_025_CALLE KARMEN KALEA_026_GRUPO SANTA ANA ETXETALDEA_027_BARRIO SANTA LUZIA AUZOA_028_CALLE ZEZILIA GALLARTZAGOI- TIA KALEA_029_IGLESIA SANTA MARIA ELIZA_030_KARMENGO SANTUTEGIA-ELIZA / IGLESIA-SANTUARIO DEL CAR- MEN_031_ANDRA MARIAREN JASOKUNDEA / LA ASUNCIÓN DE NUESTRA SEÑORA_032_CPEIPS KARMENGO AMA HLBHIP_033_CPEIPS ANDRA MARI IKASTOLA HLBHIP_AMOROTO_034_ERMITA SANTA BARBARA BASELIZA_ AAALDO_035_IGLESIA SANTA MARINA ELIZA_AEATZA_036_BAKEAREN ANDRA MARIAREN BASELIZA / ERMITA DE NUESTRA SEÑORA DE LA PAZ_037_CONVENTO DE SANTA ISABEL KOMENTUA_AANUDIAGA_038_ANDRA MARIA EDO JASOKUNDEAREN AMA ELIZA / IGLESIA SANTA MARÍA O NUESTRA SEÑORA DE LA ASUNCIÓN_039_ETXE- BARRIKO SANTA ANA BASELIZA / ERMITA DE SANTA ANA DE ETXEBARRIA_040_ERMITA DE LA MADALENA BASELI- ZA_AATZU_041_ERMITA SANTA MARINA BASELIZA_AIGOIAGA_042_CALLE CONCHA ESPINA KALEA_043_ CALLE MADALEN ERROTA KALEA_044_CALLE SANTA ISABEL KALEA_045_IGLESIA SANTA MARÍA MAGDALENA ELIZA_046_OLLARGANGO JASOKUNDEKO ANDRA MARIAREN ELIZA / IGLESIA LA ASUNCIÓN DE NUESTRA SEÑORA DE OLLARGAN_047_CASA DE CULTURA EDURNE GARITAZELAIA KULTUR ETXEA_ATEA_048_ERMITA SANTA MARINA BASELIZA_ATZENTALES_049_BARRIO SANTA MARIA AUZOA_050_EDURRETAKO ANDRA MARIA BASELIZA / ERMITA DE NUESTRA SEÑORA DE LAS NIEVES_051_ERMITA SANTA ELENA BAZELIZA_052_TRASLAVIÑAKO ANDRA MARI ELIZA / IGLESIA DE SANTA MARÍA DE TRASLAVIÑA_ATXONDO_053_ERMITA SANTA BARBARA BASELIZA_054_ERMITA SANTA EUFEMIA BASELIZA_AULESTI_055_ERMITA SANTA EUFEMIA BASELIZA_056_MADALEN BASELIZA / ERMITA DE LA MAGDALENA_BAIO_057_CAMINO CARMEN BIRJILANDAKO BIDEA_058_ANDRA MARIAREN JASOKUNDEA ELIZA / IGLESIA LA ASUNCIÓN DE NUESTRA SEÑORA_059_ERMITA SANTA KATALINA BASELIZA_060_ERMITA SANTA URSULA BASELIZA_BALMASEDA_061_CALLE CAMPO DE LAS MONJAS KALEA_062_PASEO LA MAGDALENA PASEALE- KUA_063_MAGDALENA BEHEKO KALEA / CALLE MAGDALENA BAJERA_064_CALLE VIRGEN DE GRACIA KALEA_065_ SANTA CLARA MONUMENTU MULTZOA / CONJUNTO MONUMENTAL SANTA CLARA_BAAALDO_066_MARIAREN BIHOTZA ZEHARKALEA / TRAVESÍA CORAZÓN DE MARÍA_067_MARIAREN BIHOTZA KALEA / CALLE CORAZÓN DE MARÍA_068_PASEO DOLORES IBARRURI PASEALEKUA_069_CALLE EL CARMEN KALEA_070_CALLE EL ROSARIO KALEA_071_PLAZA FLORENCIA SAN MIGUEL ENPARANTZA_072_CALLE FRANCISCA EGUILUZ KALEA_073_CALLE LA INMACULADA KALEA_074_CALLE MARIA AUXILIADORA KALEA_075_CALLE MARIA DE MAEZTU KALEA_076_MAR- TXOAREN ZORTZIKO KALEA / CALLE OCHO DE MARZO_077_BARRIO SANTA AGUEDA AUZOA_078_CAMINO SANTA AGUEDA BIDEA_079_CALLE SANTA LUZIA KALEA_080_CAMINO SANTA LUZIA BIDEA_081_PLAZA SANTA TERESA PLAZA_082_SANTA AGEDA ELKARTEA KALEA / CALLE SOCIEDAD SANTA ÁGUEDA_083_SANTA BARBARA ELKARTEA KALEA / CALLE SOCIEDAD SANTA BÁRBARA_084_PLAZA SOR JUANA CASAJÚS PLAZA_085_BAKEAREN ANDRA MARI ELIZA / IGLESIA NUESTRA SEÑORA DE LA PAZ_086_SANTA TERESA JESUSENA ELIZA / IGLESIA DE SANTA TERESA DE JESÚS_087_ITXAROPENAREN ANDRA MARIA ELIZA / IGLESIA NUESTRA SEÑORA DE LA ESPERANZA_088_KARMENGO ANDRA MARIA ELIZA / IGLESIA NUESTRA SEÑORA DEL CARMEN_089_MARIAREN BIHOTZ GARBIA ELIZA / IGLESIA DEL INMACULADO CORAZÓN DE MARÍA_090_BURTZEÑAKO ANDRA MARIAREN JAIOTZA ELIZA / IGLESIA DE LA NATIVIDAD NUESTRA SEÑORA DE BURCEÑA_091_ERMITA DE SANTA AGUEDA BASELIZA_092_ERMITA SANTA LUZIA BASELI- ZA_093_CPEIPS NTRA. SRA. DEL ROSARIO HLBHIP_094_CPEIPS LA INMACULADA M.S.J.O. HLBHIP_095_CEIP NTRA. SRA. DEL PILAR HLHI_096_CPEIPS NTRA. SRA. DE BEGOÑA HLBHIP_097_CPEIPS ALAZNE HLBHIP_098_CENTRO CÍVICO CLARA CAMPOAMOR GIZARTE-ETXEA_099_CLARA CAMPOAMORREN OMENEZKO BUSTOA / BUSTO A CLARA CAMPOAMOR_100_ESCULTURA EMAKUMEA ESKULTURA_101_ESCULTURA ROSALÍA DE CASTRO EKSULTURA_ BAIA_102_IGLESIA SANTA MARIA ELIZA_103_ESCULTURA AKELARRE ESKULTURA_BASAUI_104_CALLE BEGO- ÑAKO ANDRA MARI KALEA_105_CALLE CECILIA IDIRIN KALEA_106_CALLE MANUELA EGUIGUREN KALEA_107_CON- VENTO NUESTRA SEÑORA DE LA PIEDAD KOMENTUA_108_CPEI STA. MARÍA DE LA PROVIDENCIA HHIP_109_AMA ETA SEMEAREN ESKULTURA / ESCULTURA MADRE E HIJO_110_MANUELA EGUIGUREN EMAGINAREN BUSTOA / BUSTO DE MANUELA EGUIGUREN_111_IKATZ-HONDAKIN BILTZAILEAREN ESKULTURA / ESCULTURA A LA ESCARABILLERA_ BEANGO_112_ERMITA SANTA ANA BASELIZA_BEMEO_113_BARRIO ALMIKA AUZOA_114_CALLE ALMIKA KALEA_115_CARRETERA ALMIKA ERREPIDEA_116_CALLE ANDRAMARI KALEA_117_CALLE BARBARA DEUNA KALEA_118_EUPEME DEUNA KALEA / ' +
'CALLE SANTA EUFEMIA_119_CALLE KLARA DEUNA ESKILARAK KALEA_120_ CALLE SANTAMAÑE KALEA_121_GRUPO TALAKO ANDRA MARI ETXETALDEA_122_IGLESIA DE SANTA EUFEMIA ELIZA_123_IGLESIA DE SANTA MARIA ELIZA_124_ALMIKAKO AMA / NUESTRA SEÑORA DE ALMIKE_125_KURTZIO ETA SANTAMAÑE ELIZA / IGLESIA DE LA CRUZ Y SANTA MARINA_126_ARANTZAZUKO ANDRA MARI MONASTERIOA / MONASTERIO DE NUESTRA SEÑORA DE ARANZAZU_127_ESCULTURA ESNEDUNA ESKULTURA_128_ESCULTURA XIXILI ESKULTURA_129_FUENTE TARASKA ITURRIA_130_ARRAIN SALTZAILEAK / VENDEDORAS DE PESCADO_131_ SANTA KLARA ITURRIA_BEIATUA_132_BARRIO MAGDALENA AUZOA_133_ARANZEGIKO SANTA MAGDALENA BASELIZA / ERMITA DE SANTA MAGDALENA DE ARANZEGI_134_GARDOTZAKO ANDRAMARI BASELIZA / ERMITA NUESTRA SEÑORA DE GARDOTZA_BEIZ_135_AVENIDA MARGARITA MATURANA ETORBIDEA_136_MESEDETAKO ANDRA MARI BASELI- ZA / ERMITA DE NUESTRA SEÑORA DE LAS MERCEDES_137_ANDIKOAKO ANDRA MARIAREN SANTUTEGIA / SANTUA- RIO DE NUESTRA SEÑORA DE ANDIKOA_BILBAO_138_JARDÍN ALAZNE LOPEZ ETXEBARRIA LORATEGIA_139_BARRIO BEGOÑAKO ANDRAMARI AUZOA_140_PLAZA ANGELA ARREGUI PLAZA_141_CALLE ANGELA FIGUERA KALEA_142_CA- LLE ANSELMA DE SALCES KALEA_143_ESTRADA ANSELMA DE SALCES ESTRATA_144_BARRIO ASUNCIÓN AUZOA_145_MARGARITA LOPEZ DE MATURANA DOHATSUAREN KALEA / CALLE BEATA MARGARITA LOPEZ DE MATU- RANA_146_CALLE BENITA ASAS KALEA_147_PARQUE CASILDA ITURRIZAR PARKEA_148_CALLE CLARA CAMPOAMOR KALEA_149_SORKUNDE KALEA / CALLE CONCEPCIÓN_150_SORKUNDE ZEHARKALEA / TRAVESÍA CONCEPCIÓN_151_ MARIAREN BIHOTZA PLAZA / PLAZA CORAZÓN DE MARÍA_152_CALLE DOLORES IBARRURI KALEA_153_ ITXAROPEN KALEA / CALLE ESPERANZA_154_PARQUE ESTITXU PARKEA_155_CALLE EULALIA ABAITUA KALEA_156_PLAZA FELIPA ZURICALDAY PLAZA_157_CALLE FILOMENA BALDEZATE KALEA_158_GALLETAGINEN ETORBIDEA / AVENIDA GALLETE- RAS_159_KARITATEKO ALABEN KALEA / CALLE HIJAS DE LA CARIDAD_160_PARQUE LUCIA YARZA PARKEA_161_CALLE MARÍA AGUIRRE KALEA_162_MARIA DIAZ HAROKO KALEA / CALLE MARIA DÍAZ DE HARO_163_CALLE MARÍA MUÑOZ KALEA_164_CALLE MATILDE ORBEGOZO KALEA_165_JULIA MEATEGIAREN KALEA / CALLE MINA JULIA_166_JARDÍN MRS. LEAH MANNING LORATEGIA_167_EMAKUMEEN AZAROAREN 25EKO PLAZA / PLAZA DE LAS MUJERES 25 DE NOVIEMBRE_168_CALLE Ma VICTORIA URIBE LASO KALEA_169_MONTSERRATEKO ANDRA MARIA KALEA / CALLE NUESTRA SEÑORA DE MONTSERRAT_170_CALLE RAFAELA YBARRA KALEA_171_CALLE SABINA DE LA CRUZ KALEA_172_GRUPO SANTA ANA ETXALDEA_173_BOLUETA SANTA ANA KALEA / CALLE SANTA ANA DE BOLUETA_174_ SANTA ZEZILIA KALEA_175_SANTA KLARA KALEA_176_SANTA LUZIA KALEA_177_PLAZA SANTA MARÍA JOSEFA SANCHO DE GUERRA PLAZA_178_CARRETERA SANTA MARINA ERREPIDEA_179_ANDRA MARIA KALEA / CALLE SANTA MARÍA_180_CALLE SANTA MONIKA KALEA_181_PASEO SANTA MONIKA PASEALEKUA_182_ZIRGARIAK KAIA / MUELLE SIRGUERAS_183_KONTZEZIO KALEA / CALLE CONCEPCIÓN_184_BEGOÑAKO ANDRA MARIA KALEA / CALLE VIRGEN DE BEGOÑA_185_BEGOÑAKO ANDRA MARIA ZEHARKALEA / TRAVESÍA VIRGEN DE BEGOÑA_186_PINUDIKO ANDRA MARIA ETXALDEA / GRUPO VIRGEN DEL PINAR_187_EPALTZAREN ALARGUNAREN KALEA / CALLE VIUDA DE EPAL- ZA_188_PLAZA YOLANDA GONZALEZ PLAZA_189_ARTZAIN ONA ETA JESUS HAURRAREN SANTA TERESA ELIZA / IGLE- SIA EL BUEN PASTOR Y SANTA TERESA DEL NIÑO JESÚS_190_SORTZEZ GARBIAREN ELIZA / IGLESIA DE LA INMACU- LADA CONCEPCIÓN_191_JASOKUNDEKO ANDRA MARIAREN ELIZA / IGLESIA DE LA ASUNCIÓN DE NUESTRA SEÑO- RA_192_BEGOÑAZPI AMA BIRJINAREN JAIOTZAREN ELIZA / IGLESIA DE LA NATIVIDAD DE NUESTRA SEÑORA BEGOÑA- ZPI_193_MARIA ERREGINAREN ELIZA / IGLESIA DE MARÍA REINA_194_BELENGO ANDRA MARIAREN ELIZA / IGLESIA NUESTRA SEÑORA DE BELÉN_195_COVADONGAKO ETA MESEDEETAKO ANDRA MARIAREN ELIZA / IGLESIA NUESTRA SEÑORA DE COVADONGA Y DE LA MERCED_196_ERREGE-ERREGINEN ANDRA MARIA ETA SAN FERNANDOREN ELIZA / IGLESIA NUESTRA SEÑORA DE LOS REYES Y SAN FERNANDO_197_LOURDESKO ANDRA MARIA ETA SAN ADRIANGO ELIZA / IGLESIA DE NUESTRA SEÑORA DE LOURDES Y SAN ADRIÁN_198_URIBARRIKO ANDRA MARIAREN ELIZA / IGLE- SIA DE NUESTRA SEÑORA DE URIBARRI _199_ATXETAKO ANDRA MARI ELIZA / IGLESIA NUESTRA SEÑORA DE ATXE- TA_200_KARMENGO ANDRA MARIAREN ELIZA / IGLESIA DE NUESTRA SEÑORA DEL CARMEN_201_PILARREKO ANDRA MARIAREN ELIZA / IGLESIA NUESTRA SEÑORA DEL PILAR_202_BOLUETAKO SANTA ANA ELIZA / IGLESIA DE SANTA ANA DE BOLUETA_203_BEGOÑAKO ANDRA MARIAREN BASILIKA / BASÍLICA DE SANTA MARÍA DE BEGOÑA_204_GOIURIKO ANDRA MARIA ELIZA / IGLESIA DE SANTA MARÍA DE GOIURI_205_SANTA MARIA JOSEFA ELIZA / IGLESIA DE SANTA MARÍA JOSEFA_206_KARITATEKO JESUSEN ZERBITZARIEN KOMENTUA / CONVENTO DE LAS SIERVAS DE JESÚS DE LA CARIDAD_207_SORTZEZ GARBIA KOMENTUA / CONVENTO DE LA INMACULADA CONCEPCIÓN_208_DOLOREETAKO ANDRA MARIAREN ETA SANTA GEMMA MONASTERIOA / MONASTERIO NUESTRA SEÑORA DE LOS DOLORES Y SANTA GEMMA_209_AGUSTINDAR ERLIJIOSOAK - SANTA MONICA KOMENTUA / RELIGIOSAS AGUSTINAS - CONVENTO DE SANTA MÓNICA_210_SAN PABLO DE LA CRUZEKO AHIZPA PASIOTARRAK / HERMANAS PASIONISTAS DE SAN PABLO DE LA CRUZ_211_KARMELO MENDIKO ANDRA MARI ELIZA / IGLESIA NUESTRA SEÑORA DEL MONTE CARME- LO_212_KARITATE ALABAK / HIJAS DE LA CARIDAD_213_BIRGINETXEKO SANTA MARIA ELIZA / IGLESIA SANTA MARÍA DE BIRGINETXE_214_ITURRIBIDEKO ANDRA MARIA ELIZA / IGLESIA DE SANTA MARÍA DE ITURRIBIDE_215_LOURDESKO KOROA BASELIZA / ERMITA DE LA CORONA DE LOURDES_216_BEGOÑAKO ANDRA MARIAREN IKASTETXEKO ELIZA (JESUITAK ) / IGLESIA DEL COLEGIO NUESTRA SEÑORA DE BEGOÑA (JESUITAS)_217_ CPEIPS NTRA. SRA. DEL CARMEN HLBHIP_218_CPEIPS NTRA. SRA. DEL PILAR HLBHIP_219_CPES STA. MARÍA DE ARTAGAN BHIP_220_CPEIPS HIJAS DE LA CARIDAD-N. SRA DE BEGOÑA HLBHIP_221_CPEIPS ESCLAVAS SC - FÁTIMA HLBHIP_222_CPEIPS JESUITINAS BILBAO LA INMACULADA ' +
'HLBHIP_223_CPES MARÍA INMACULADA BHIP_224_ CPEIPS EL AVE MARÍA HLBHIP_225_ CPEIPS MADRE DE DIOS HLBHIP_226_CPEIPS PUREZA DE MARÍA HLBHIP_227_ CPES SOPEÑA-BILBAO BHIP_228_CEIP BIRJINETXE HLHI_229_CEIP MAESTRA ISABEL GALLEGO GORRIA HLHI_230_ CEIP SRA. VDA. DE EPALZA HLHI_231_HOSPITAL SANTA MARINA OSPITALEA_232_ARROSARIOKO ANDRA MARIAREN ETXEA - EGOITZA ETA KOMENTUA / CASA NUESTRA SEÑORA DEL ROSARIO - RESIDENCIA Y CONVENTO_233_ESKULTURAK REINA MARGARI- TA, INFANTA MARIANA ETA REINA MARIANA / ESCULTURAS REINA MARGARITA, INFANTA MARIANA Y REINA MARIA- NA_234_ESCULTURA JUDITH ESKULTURA_235_KAREHARRIZKO ESKULTURA MELPÓME MUSA / ESCULTURA MELPÓ- ME MUSA_236_MARIA JOSÉ URRUZOLA ZABALZAREN OMENEZKO MONOLITOA / MONOLITO HOMENAJE A MARÍA JOSÉ URRUZOLA ZABALZA_237_DOLORES IBARRURIREN ESKULTURA / ESCULTURA DE DOLORES IBARRURI_238_CA- SILDA ITURRIZARREN MONUMENTUA IZENEKO ESKULTURA / ESCULTURA MONUMENTO A CASILDA ITURRI- ZAR_239_ESCULTURA LA EXORCISTA ESKULTURA_240_ESKULTURA AMATASUNA IZENEKOA / ESCULTURA MATERNI- DAD _241_ESCULTURA MAIA ESKULTURA_242_GRÚA KAROLA GARABIA_243_ESCULTURA MAMAN ESKULTURA_244_ TERPSIKOREA DANTZAREN MUSA / TERPSÍCORE MUSA DE LA DANZA_245_ZIRGARIAK ESKULTURA / ESCULTURA SIRGUERAS_246_CASILDA ITURRIZAREN ITURRIA / FUENTE DE DOÑA CASILDA_247_BASERRITARREN ETXEKO AMA BIRJINA ESKULTURA / ESCULTURA LA VIRGEN DE LA CASA DE LOS ALDEANOS_248_MINERVA JAINKOSA ESKULTURA / ESCULTURA LA DIOSA MINERVA_249_JAKINDURIAREN JAINKOSA (MINERVA) ESKULTURA / ESCULTURA LA DIOSA DE LA SABIDURÍA (MINERVA)_250_ESCULTURA EVA ESKULTURA_251_AMATASUNA ESKULTURA / ESCULTURA LA MATER- NIDAD_252_LEGEA ESKULTURA / ESCULTURA LA LEY_253_JUSTIZIA ESKULTURA / ESCULTURA LA JUSTICIA_254_EU- TERPE (MUSIKAREN MUSA) ESKULTURA / ESCULTURA EUTERPE (MUSA DE LA MÚSICA)_255_UGARITASUNAREN ALEGORIA ESTATUA / ESTATUA ALEGORÍA DE LA ABUNDANCIA_256_KARITATEA ESKULTURA / ESCULTURA LA CARIDA- D_257_BEGOÑAKO ANDRA MARI ESKULTURA / ESCULTURA VIRGEN DE BEGOÑA_258_ TXIKITEROEN AMA BIRJINA ESKULTURA / ESCULTURA VIRGEN DE LOS TXIKITEROS_259_OSPEA ESKULTURA / ESCULTURA FAMA_260_ARROSA- RIOKO AMA BIRJINA ESKULTURA / ESCULTURA VIRGEN DEL ROSARIO_261_AMA BIRJINA UMEAREKIN ESKULTURA / ESCULTURA VIRGEN CON NIÑO_262_AMA BIRJINA ESKULTURA (DEUSTUKO UNIBERTSITATEA) / ESCULTURA VIRGEN MARÍA (UNIVERSIDAD DE DEUSTO)_263_SORTZEZ GARBIA ESKULTURA (BASURTUKO OSPITALEA) / ESCULTURA INMA- CULADA CONCEPCIÓN (HOSPITAL DE BASURTO)_264_ARANTZAZUKO AMA BIRJINA ESKULTURA / ESCULTURA VIRGEN DE ARÁNZAZU_265_BEGOÑAKO ANDRA MARI ESKULTURA (INDAUTXUKO JESUITAK) / ESCULTURA VIRGEN DE BEGOÑA (JESUITAS DE INDAUTXU)_266_KANTOIKO AMA BIRJINA ESKULTURA / ESCULTURA VIRGEN DEL CAN- TÓN_267_AMA ZURIA ESKULTURA / ESCULTURA DE LA VIRGEN BLANCA_268_ESCULTURA SANTA MARÍA JOSEFA ESKULTURA_269_ZORROTZAURREKO AMA BIRJINA ESKULTURA / ESCULTURA VIRGEN EN ZORROZAURRE_270_LA CAVA ETXEKO AMA BIRJINA ESKULTURA / ESCULTURA VIRGEN DE LA CASA DE LA CAVA_271_SORTZEZ GARBIA ESKULTURA (BASURTUKO OSPITALEA) / ESCULTURA INMACULADA CONCEPCIÓN (HOSPITAL DE BASURTO)_ BUSTUIA_272_IGLESIA DE SANTA MARÍA ELIZA_273_PARESIKO ANDRA MARIAREN BASELIZA / ERMITA NUESTRA SEÑORA DE PARESI_DEIO_274_CALLE ARANTZAZU KALEA_275_MESEDEETAKO ANDRA MARIAREN IKASTETXEA KOMENTUA / CONVENTO COLEGIO DE NUESTRA SEÑORA DE LA MERCED_DIMA_276_PIETATEAREN ANDRA MARIA- REN BASELIZA / ERMITA NUESTRA SEÑORA DE LA PIEDAD_277_ERMITA DE SANTA APOLONIA BASELIZA_278_ERMITA DE SANTA MARINA BASELIZA_DURANGO_279_CALLE ANDRA MARIA KALEA_280_PLAZA MADALENA PLAZA_281_CA- LLE MADALENOSTE KALEA_282_MARTXOAREN ZORTZIKO KALEA / CALLE OCHO DE MARZO_283_PLAZA SANTA ANA PLAZA_284_BARRIO SANTA LUZIA AUZOA_285_IGLESIA SANTA ANA ELIZA_286_URIBARRIKO ANDRA MARI ELIZA / IGLESIA DE SANTA MARÍA DE URIBARRI_287_MADALENAREN BASELIZA / ERMITA DE LA MADALENA_288_CONVENTO DE SANTA SUSANA KOMENTUA_EA_289_ERMITA DE LA CONCEPCIÓN BASELIZA_ELOIO_290_CUESTA ELBIRA IÑURRIETA ALDAPA_291_AVENIDA LOURDES ETORBIDEA_292_CALLE SANTA ELENA KALEA_293_SORTZEZ GARBIAREN BASILIKA / BASÍLICA DE LA PURÍSIMA CONCEPCIÓN_294_ERMITA SANTA LUZIA BASELIZA_295_CPEI MARIA BITARTE- KO HHIP_296_CPEPS LOURDESKO AMA LBHIP_EANDIO_297_CAMINO DEGOIENA-ANDRAMARITURRI BIDEA_298_ AVENIDA FÁTIMA ETORBIDEA_299_CARRETERA MAGDALENA ERREPIDEA_300_CALLE MARÍA NIEVES URRUTIA KALEA_301_CALLE NATIVIDAD CAVIA KALEA_302_CAMINO PEÑAS-ANDRAMARITURRI BIDEA_303_ FATIMAKO ANDRA MARI ELIZA / IGLESIA DE NUESTRA SEÑORA DE FÁTIMA _304_ANDRA MARI ELIZA / PARROQUIA DE LA ASUNCIÓN DE NUESTRA SEÑORA_305_ LA MAGDALENAKO UMILDEGIA / HUMILLADERO DE LA MAGDALENA_306_LECHERA / ESNE-SALTZAILEA_307_EMAKUME BASERRITARRA_EMUA_308_CALLE SANTA ANA KALEA_EIGOITI_309_BA- RRIO KATALINAGA AUZOA_310_BARRIO MADALEN AUZOA_311_IDIBALZAGAKO SANTA MARIA ELIZA / IGLESIA DE SANTA MARÍA DE IDIBALZAGA_ETXEBAI_312_CALLE ISABEL LARRAKOETXEA KALEA_313_CALLE MARIVI ITURBE KALEA_314_CALLE SANTA ANA KALEA_315_CALLE SANTA MARINA KALEA_316_ERMITA SANTA ANA BASELIZA_317_ MARIVÍ ITURBEREN OMENEZKO PLAKA / PLACA EN RECUERDO A MARIVÍ ITURBE_ETXEBAIA_318_ERMITA SANTA ENGRACIA BASELIZA_319_CEIP MANUELA ZUBIZARRETA HLHI_GALDAKAO_320_CALLE ANDRA MARI KALEA_321_ CALLE MARIA NIEVES GALLASTEGI GALARZA KALEA_322_CALLE SIXTA BARRENETXEA KALEA_323_PARQUE MONIKA LEKUNBERRI PARKEA_324_EMAKUME DINAMITARIEN PARKEA / PARQUE DE LAS MUJERES DINAMITERAS_325_PLAZA ROMUALDA ZULOAGA ARTETXE PLAZA_326_EMAKUMEEN PARKEA / PARQUE DE LAS MUJERES_327_JASOKUNDEKO ANDRA MARIAREN PARROKIA / PARROQUIA DE LA ASUNCIÓN DE NUESTRA SEÑORA_328_ANDRA MARI ELIZA / IGLE- SIA DE SANTA MARÍA_329_SANTA MARINA ETA SAN JOSE LANGILEAREN PARROKIA / PARROQUIA DE SANTA MARINA Y SAN ' +
'JOSÉ OBRERO_330_PARROQUIA DE SANTA BÁRBARA PARROKIA_331_IGOKUNDEKO BASELIZA / ERMITA DE LA ASCENSIÓN_332_LA LECHERA / ESNEZALEA_GATIA_333_ERMITA SANTA MARIA MAGDALENA BASELIZA_334_IGLE- SIA DE SANTA MARIA ELIZA_335_JASOKUNDEKO ANDRA MARIAREN PARROKIA / PARROQUIA DE NUESTRA SEÑORA DE LA ASUNCIÓN_336_ BIDEKO ANDRA MARIAREN BASELIZA / ERMITA NUESTRA SEÑORA DEL CAMINO_GALDAMES _337_IGLESIA PARROQUIAL DE SANTA MARÍA PARROKIA ELIZA_338_TXABARRIKO ANDRA MARIAREN BASELIZA / ERMITA NUESTRA SEÑORA DE TXABARRI_339_ERMITA SANTA MARÍA MAGDALENA BASELIZA_GAAI_340_ERMITA DE SANTA CATALINA BASELIZA_GAUTEGIZ - ATEAGA_341_IGLESIA ANDRA MARI ELIZA_342_KARMENGO ANDRA MARIAREN BASELIZA / ERMITA NUESTRA SEÑORA DEL CARMEN_GENIA - LUMO_343_CALLE AMAIUR KALEA_344_CALLE ANDRA MARI KALEA_345_CALLE ELBIRA ITURRI KALEA_346_EUGENIA IDOIAGA EMAGINAREN KALEA / CALLE DE LA MATRONA EUGENIA IDOIAGA_347_ CALLE MERTZEDE KALEA_348_BARRIO SANTA ANA AUZOA_349_CALLE SANTA KLARA KALEA_350_PARQUE SANTA LUZIA PARKEA_351_JASOKUNDEKO ANDRA MARIA ELIZA / IGLESIA NUESTRA SEÑORA DE LA ASUNCIÓN_352_ERMITA SANTA LUZIA BASELIZA_353_ SANTA KLARA KOMENTUA / CONVENTO DE SANTA CLARA_354_AMILLAKO SAN MARTIN ETA SANTA EUFEMIA BASELIZA / ERMITA DE SAN MARTÍN Y SANTA EUFEMIA DE AMILLA_355_CPEIPS STA. MARÍA DEL SOCORRO HLBHIP_356_CEIP SOFÍA TARA- MONA HLHI_357_ESCULTURA MARIMETA ESKULTURA_GETXO_358_CALLE AMAIA KALEA_359_CALLE EL CARMEN KALEA_360_CALLE FRANCISCA LABROCHE KALEA_361_CALLE LAS MERCEDES KALEA_362_CALLE MARIA GOIRI KALEA_363_CALLE MARIANDRESENA KALEA_364_PLAZA MARINA DE CASTILLA PLAZA_365_CALLE PEÑA DE SANTA MARINA KALEA_366_CALLE REINA MARIA CRISTINA KALEA_367_PLAZA REINA MARIA CRISTINA PLAZA_368_CALLE SANTA ANA KALEA_369_PLAZA SANTA ANA PLAZA_370_CALLE SANTA EUGENIA KALEA_371_PLAZA SANTA EUGENIA PLAZA_372_CARRETERA SANTA MARIA ERREPIDEA_373_CALLE USOA KALEA_374_IGLESIA DE SANTA ANA ELIZA_375_ERMITA DE SANTA ANA BASELIZA_376_MERZEDESEKO ANDRA MARIAREN ELIZA / IGLESIA NUESTRA SEÑORA DE LAS MERCEDES_377_JASOKUNDEKO ANDRA MARIA ELIZA / IGLESIA SANTA MARÍA DE LA ASUN- CIÓN_378_ERMITA DE SANTA COLOMA BASELIZA_379_JESUSEN MIRABEEN ELIZA / IGLESIA SIERVAS DE JESÚS_380_ MARIA REPARADORA ARIKETA ETXEA / CASA DE EJERCICIOS MARÍA REPARADORA_381_ CPEIPS MADRE DEL DIVINO PASTOR HLBHIP_382_CPEIPS SANTISIMA TRINIDAD HLBHIP_383_CPEIPS NTRA. SRA. DE EUROPA HLBHIP_384_EIPR EL CARMEN-URDANETA HEPR_385_CPEIPS MADRE DEL DIVINO PASTOR HLBHIP_386_ CEIP ANDRA MARI HLHI_387_ CASA CRISTINA ETXEA_388_PUNTA BEGOÑAKO GALERIAK / GALERIAS DE PUNTA BEGOÑA_389_CASA AMANDRERENA ETXEA_390_CASA MERCEDES ETXEA_391_VILLA MERCHE TXALETA_392_VILLA LUISA TXALETA_GIZABUUAGA _393_IGLESIA DE SANTA CATALINA ELIZA_394_ERMITA DE SANTA BARBARA BASELIZA_395_OIBARKO ANDRA MARIA BASELIZA / ERMITA DE NUESTRA SEÑORA DE OIBAR_GODEXOLA_396_BARRIO ARANTZAZU AUZOA_397_SORTZEZ GARBIA BASELIZA / ERMITA INMACULADA CONCEPCIÓN_398_ISASIKO ANDRA MARIA BASELIZA / ERMITA NUESTRA SEÑORA DE ISASI_399_ERMITA SANTA AGUEDA BASELIZA_GOLIZ_400_CALLE ANDRA MARI LABURBIDE BIDEA_401_CAMINO ANDRA MARI LABURBIDE BIDEA_402_CALLE ELOISA ARTAZA KALEA_403_CALLE SANTABARBA- RAMASTI KALEA_404_ANDRA MARIAREN SORTZEZ GARBIA ELIZA / IGLESIA LA PURÍSIMA CONCEPCIÓN DE NUESTRA SEÑORA_405_AGIRRE ETA ELURRETAKO ANDRA MARI BASELIZA / ERMITA DE ANDRA MARI DE AGIRRE Y DE LAS NIEVES_GÜEÑES_406_CALLE ANDRA MARI KALEA_407_PLAZA DE LA MADALENA / MADALENAKO PLAZA_408_BA- RRIO SANTA MARIÑE AUZOA_409_IGLESIA DE SANTA MARÍA ELIZA_410_ERMITA DE SANTA MARÍA MAGDALENA BASE- LIZA_411_CPEIPS STA. MARÍA DEL SOCORRO HLBHIP_IBAANGELU_412_ERMITA DE SANTA ENGRACIA BASELI- ZA_413_ERMITA DE SANTA MARINA BASELIZA_IGOE_414_BARRIO SANTA LUZIA AUZOA_415_ANDRA MARIA JASOKUNDEKOAREN ELIZA / IGLESIA DE SANTA MARÍA DE LA ASUNCIÓN_416_ERMITA SANTA MARINA DE ARAMOTZ BASELIZA_IUETA_417_BARRIO AMATZA AUZOA_418_BARRIO SANTA APOLONIA AUZOA_419_POLÍGONO SANTA APOLONIA INDUSTRIALDEA_420_BARRIO SANTA MAÑA AUZOA_421_ERMITA DE SANTA APOLONIA BASELIZA_IZUTZA _422_ERDOITZAKO ANDRA MARIAREN BASELIZA / ERMITA DE NUESTRA SEÑORA DE ERDOITZA_AANTZA HAANA - VALLE DE CAANZA_423_IGLESIA DE SANTA MARÍA ELIZA_424_ IGLESIA DE SAN JULIÁN Y SANTA BASI- LISA ELIZA_425_IGLESIA DE SANTA CECILIA ELIZA_426_GERTAERA ONEKO ANDRA MARIA SANTUTEGIA / SANTUARIO DE NUESTRA SEÑORA DEL BUEN SUCESO_OTEZUBI_427_BARRIO SANTA ANA AUZOA_LANESTOSA_428_CALLE MANUELA SAINZ DE ROZAS KALEA_LAABETZU_429_CALLE ANDRA MARI KALEA_430_ANDRA MARIAREN JASOKUNDEA ELIZA / IGLESIA DE LA ASUNCIÓN DE NUESTRA SEÑORA_LAUIZ_431_UNBEKO DOLORETAKO AMA BIRJINA GARBIAREN SANTUTEGIA / SANTUARIO DE LA VIRGEN PURA DOLOROSA DE UNBE_LEIOA_432_AVEN AMAIA ETORBIDEA_433_GRUPO BEGOÑAKO AMA ETXETALDEA_434_PLAZA DOLORES IBARRURI PLAZA_435_CALLE KANDELAZUBIETA KALEA_436_CALLE ONDIZKO ANDRA MARIA KALEA_437_AVENIDA SANTA ANA ETORBIDEA_438_ONDIZKO ANDRA MARIAREN BASELIZA / ERMITA DE NUESTRA SEÑORA DE ONDIZ _439_CPEIPS B.V. MARÍA HLBHIP_440_CPEIPS NTRA. SRA. DE LAS MERCEDES HLBHIP_441_POLIDEPORTIVO KANDELAZUBIETA KIROLDEGIA_442_HOMENAJE A JESUSA BILBAO ARIZMENDI, TXUTXA OMENALDIA_443_ESCULTURA LAMIA ESKULTURA_LEEITIO_444_CALLE ANTIGUAKO AMA KALEA_445_CALLE IGUALDEGI KALEA_446_CALLE KARMENGO AMA KALEA_447_CALLE MARIA DIAZ DE HARO KALEA_448_ BARRIO MERZED AUZOA_449_AVENIDA SANTA ELENA ETORBIDEA_450_AVENIDA SANTA KATALINA ETORBIDEA_451_JASOKUNDEKO ANDRA MARIAREN BASILIKA / BASÍLICA ASUNCIÓN DE NUESTRA SEÑORA_452_ANDRA MARIAREN JASOKUNDEAREN ELIZA / IGLESIA DE LA ASUNCIÓN DE SANTA ' +
'MARÍA_453_ERMITA SANTA ELENA BASELIZA_454_ERMITA SANTA CATALINA BASELIZA_455_ERMITA SANTA MADALENA BASELIZA_456_SANTA KATALINA ITSASARGIA / FARO DE SANTA KATALINA_457_SANTA KATALINAREN IRUDIA / IMAGEN DE SANTA CATALINA_LEMOA_458_IGLESIA DE SANTA MARÍA ELIZA_LEMOIZ_459_IGLESIA DE SANTA MARÍA ELIZA_LEZAMA_460_ANDRA MARI ELIZA / IGLESIA DE SANTA MARIA_LOIU_461_ CAMINO SANTA LUZIA BIDEA_462_CPES ESPERANZA ALHAMA BHIP_463_CPEIPS NTRA. SRA. DE LA MERCED HLBHIP_464_ZONA DEPORTIVA SANTA LUZIA KIROL EREMUA_MALLABIA_465_JASOKUNDEAREN ELIZA / IGLESIA DE LA ASUNCIÓN_MAÑAIA_466_CALLE ANDRA MARI KALEA_467_JASOKUNDEKO ANDRA MARI ELIZA / IGLESIA LA ASUNCIÓN DE NUES- TRA SEÑORA_MAINA - XEMEIN_468_CALLE BEHEKO MOJEN KALEA_469_CALLE KARMENGO KALEA_470_ANDRA MARIA JASOKUNDEKOA ELIZA / IGLESIA SANTA MARIA DE LA ASUNCIÓN_471_ERDOTZAKO ANDRA MARIA BASELIZA / ERMITA NUESTRA SEÑORA DE ERDOTZA_472_ERMITA DE SANTA MARINA BASELIZA_MENDATA_473_IGLESIA SANTA MARÍA MAGDALENA ELIZA_MENDEXA_474_ERMITA SANTA LUCIA BASELIZA_MEÑAA_475_MEÑAKABARRENEKO SANTA MARIA BASELIZA / ERMITA DE SANTA MARÍA DE MEÑAKABARRENA_MOGA_476_ANDRA MARIKO BASELIZA / ERMITA NUESTRA SEÑORA DE LOS REMEDIOS_MUNDAA_477_ CALLE BIRJIÑA KALEA_478_CALLE KARMEN KALEA_479_BARRIO LAMIARAN AUZOA_480_CALLE SANTA KATALIÑA KALEA_481_PLAZA SANTA KATALIÑA PLAZA_482_CALLE SANTXAPOZU KALEA_483_IGLESIA SANTA MARÍA ELIZA_484_ERMITA SANTA KATALIÑA BASELIZA_485_LAMIARANGO SANTA MARIA DE LA GRACIA BASELIZA / ERMITA DE SANTA MARIA DE LA GRACIA DE LAMIARAN_MUNGIA_486_CALLE ANDRA MARI KALEA_487_CAMINO MADALEN BIDEA_488_CAMINO SANTA ELENA BIDEA_489_CAMINO SANTA MARINA BIDEA_490_ANDRA MARIAREN ERREDENTZIOA ELIZA / IGLESIA DE NUESTRA SEÑORA DE LA REDENCIÓN_491_IGLESIA DE SANTA MARÍA ELIZA_492_ERMITA SANTA ELENA DE EMERANDO BASELIZA_493_ERMITA SANTA MARÍA MAGDALENA BASELIZA_494_ER- MITA SANTA MARINA Y SAN IGNACIO BASELIZA_MUNITIBA - ABATZEGI GEIAIZ_495_ ANDRA MARIAREN JAIOTZA ELIZA / IGLESIA LA NATIVIDAD DE NUESTRA SEÑORA_MUUETA_496_ANDRA MARIAREN JAIOTZA ELIZA / IGLESIA LA NATIVIDAD DE NUESTRA SEÑORA_MUSIZ_497_CALLE LA MAGDALENA KALEA_498_TRAVESÍA LA MAGDALENA ZEHAR- KALEA_499_JASOKUNDEKO AMAREN BASELIZA / ERMITA NUESTRA SEÑORA DE LA ASUNCIÓN_500_JOSEFA MEATZEA KOBARONEN / MINA JOSEFA EN COBARON_501_BIZKAIKO AMALIA KISKALTZE-LABEA / HORNO DE CALCINACIÓN AMALIA VIZCAINA_502_SANTA EUSEBIA MEATZEA POBEÑAN / MINA SANTA EUSEBIA EN POBEÑA_MUXIA_503_BARRIO AMONA AUZOA_NABANIZ_504_GORRITIZ GOROSTIZAGAKO SANTA MARIA ELIZA/ IGLESIA SANTA MARIA DE GORRITIZ GOROSTIZAGA_ONDAOA_505_CALLE ANTIGUAKO AMA KALEA_506_CALLE MAGDALENA KALEA_507_ANDRA MARIAREN JAIOTZA ELIZA / IGLESIA LA NATIVIDAD DE NUESTRA SEÑORA_508_ERMITA DE SANTA CLARA BASELIZA_509_ANTIGUAKO BASELIZA / ERMITA DE LA ANTIGUA_510_BHI ANTIGUA ́ KO ITSASKETA TA ARRANTZA IKASTETEXEA / IES - NUESTRA SEÑORA DE LA ANTIGUA_511_ITSASOKO EMAKUMEAK ESKULTURA / ESCULTURA A LA MUJER DEL MAR_OTUELLA_512_CALLE CATALINA GIBAJA KALEA_513_GRUPO SANTA MARGARITA ETXETALDEA_514_ERMITA SANTA MARÍA MAGDALENA BASELIZA_515_ESCULTURA CATALINA GIBAJA ESKULTURA_OOZO_516_CALLE ANDRA MARI KALEA_517_CALLE SANTA MARINA KALEA_518_CALLE SANTA MARÍA KALEA_519_BARRIO ZALOA AUZOA_520_ERMITA SANTA MARÍA DE ZALOA BASELIZA_521_ERMITA SANTA CATALINA BASELIZA_OTXANDIO_522_ESTRADA SORGIN ESTRADA_523_IGLESIA DE SANTA MARINA ELIZA_524_ANDRESA LANDA AXPE FUNDAZIO PRIBATUA / FUNDACIÓN PRIVADA ANDRESA LANDA AXPE_PLENTZIA_525_CAMINO ANDRA MARI BIDEA_526_CALLE MADALEN ALDAPA KALEA_527_IGLESIA SANTA MARÍA MAGDALENA ELIZA_528_AGIRRE ETA ELURRETAKO ANDRA MARI BASELIZA / ERMITA DE ANDRA MARI DE AGIRRE Y DE LAS NIEVES _POTUGALETE_529_CALLE ARANTZA KALEA_530_TRAVESÍA ARANTZA ZEHARKALEA_531_CALLE CARMEN GANDARIAS KALEA_532_CALLE CASILDA ITURRIZAR KALEA_533_CALLE CONCEPCIÓN ARENAL KALEA_534_CALLE MADRE TERESA DE CALCUTA KALEA_535_CALLE MARÍA DIAZ DE HARO KALEA_536_CALLE MARÍA VALLEJO KALEA_537_CALLE SANTA CLARA KALEA_538_CALLE SANTA MARIA KALEA_539_CALLE VIRGEN DE LA GUÍA KALEA_540_MARTXOAREN ZORTZIKO PLAZA / PLAZA 8 DE MARZO_541_NAZARETEKO ANDRA MARIAREN ELIZA / IGLESIA NUESTRA SEÑORA DE NAZARET_542_IGLESIA SANTA MARÍA ELIZA_543_MARIA ELIZAREN AMA ELIZA / IGLESIA MARIA MADRE DE LA IGLESIA_544_CPEIPS NTRA. SRA. DEL CARMEN HLBHIP_545_CPEIPS STA. MARÍA HLBHIP_546_CEIP VIRGEN DE LA GUÍA HLHI_547_CENTRO CULTURAL SANTA CLARA KULTUR ETXEA_548_MARIA DIAZ DE HAROREN MONUMENTUA / MONUMENTO A DÑA. MARÍA DÍAZ DE HARO_549_AMA AFRIKA / MADRE ÁFRICA_SANTUTZI_550_GRUPO AURORA VILDOSOLA ETXETALDEA_551_URBA- NIZACIÓN LA MAGDALENA ETXETALDEA_552_CALLE NUESTRA SEÑORA DE BEGOÑA KALEA_553_MARTXOAREN ZORTZIKO KALEA / CALLE OCHO DE MARZO_554_MUELLE REINA VICTORIA KAIA_555_PASEO REINA VICTORIA PASEALEKUA_556_CALLE SANTA EULALIA KALEA_557_CALLE SANTA RAFAELA MARIA KALEA_558_CALLE SARDINERA AURORA PEREZ DE VELEZ KALEA_559_CALLE SOR NATIVIDAD HOMEDES KALEA_560_CALLE VIRGEN DEL MAR KALEA_561_PLAZA VIRGEN DEL MAR PLAZA_562_PARQUE DE LA SARDINERA PARKEA_563_IGLESIA DE LA INMACULADA CONCEPCIÓN ELIZA_564_IGLESIA REINA DE LOS APÓSTOLES ELIZA_565_IGLESIA VIRGEN DEL MAR ELIZA_566_CPEIPS STA. MARIA-HIJAS DE LA CRUZ HLBHIP_567_CPEIP STA. EULALIA HLHIP_568_CEIP ITSASOKO AMA HLHI_569_CEIP MAESTRA EMILIA ZUZA BRUN HLHI_570_SARDINA-SALTZAILEA ESKULTURA / ESCULTURA SARDINERA_571_DOLORES IBARRURIREN ESKULTURA / ESCULTURA DE DOLORES IBÁRRURI_572_KARMENGO AMA BIRJINAREN MONUMENTUA / MONUMENTO A LA VIRGEN DEL CAR- MEN_SESTAO_573_CALLE ANUNCIACIÓN DE NUESTRA SEÑORA KALEA_574_CALLE ASUNCIÓN MENÉNDEZ KALEA_575_CALLE BEGOÑAKO ANDRA MARI KALEA_576_CALLE ' +
'CONCEPCIÓN ARENAL KALEA_577_CALLE CONDESA PARDO BAZAN KALEA_578_BOULEVARD JUNCAL DE ALLENDE BULEBAR_579_CALLE MARIANA PINEDA KALEA_580_GRUPO NUESTRA SEÑORA DEL CARMEN ETXETALDEA_581_PARQUE SOR JOSEFA BALDA PARKEA_582_CALLE SOTERA DE LA MIER KALEA_583_CALLE LA GALANA KALEA_584_BEGOÑAKO ANDRA MARIAREN ELIZA / IGLESIA NUESTRA SEÑORA DE BEGOÑA_585_DEIKUNDEKO SANTA MARIA ELIZA / IGLESIA DE SANTA MARIA DE LA ANUNCIACIÓN_586_KARMENGO AMA BIRJINAREN ALDAREA / ALTAR DE LA VIRGEN DEL CARMEN_587_IES ÁNGELA FIGUERA BHI_588_GRUPO “LA HUMANITARIA, MARÍA DE LOS ÁNGELES CHAVARRÍA DE OLAVARRÍA” ETXETALDEA_589_LA GALANA’REN ETXEA / CASA DE LA GALANA_590_BIBLIOTECA SABINA DE LA CRUZ LIBURUTEGIA_SOPELA_591_ MARTXOAREN ZORTZIKO KALEA / CALLE OCHO DE MAR- ZO_592_ERMITA SANTA MARINA BASELIZA_593_KARMENGO ANDRA MARIAREN BASELIZA / ERMITA DE NUESTRA SEÑORA DE EL CARMEN_594_IRRISTATZAILEA ESKULTURA / ESCULTURA LA PATINADORA_595_HOMENAJE A JOANE SOMARRIBA OMENALDIA_SOPUETA_596_PLAZA CARMEN QUINTANA ZABALA PLAZA_597_BARRIO SANTA ANA AUZOA_598_BA- RRIO SANTA MARÍA AUZOA_599_JASOKUNDEKO ANDRA MARIA ELIZA / IGLESIA SANTA MARÍA DE LA ASUNCIÓN_600_ERMITA DE SAN ANTONIO Y SANTA ANA BASELIZA_601_ERMITA SANTA LUCIA BASELIZA_602_ERMITA DEL PILAR BASELIZA_SUAIETA_603_LEGENDIKAKO ANDRA MARIA ELIZA / IGLESIA DE SANTA MARÍA DE LEGENDIKA_TUCIOS - TUTZIOZ_604_KARITATEKO ANDRA MARIAREN BASELIZA / ERMITA DE NUESTRA SEÑORA DE LA CARIDAD_UBIDE_605_BARRIO MADALEN AUZOA_UGAO - MIABALLES_606_UDIARRAGAKO AMA BIRJINAREN BASELIZA / ERMITA DE LA VIRGEN DE UDARRIAGA_UDULIZ_607_PLAZA BENDEJEREN PLAZA_608_PLAZA EUSEBIA FELISA ASKOBERETA PLAZA_609_CALLE LUISA LEIVAR KALEA_610_PARQUE ANDRA MARI PARKEA_611_PLAZA SANTA MARIÑE PLAZA_612_IGLESIA DE SANTA MARÍA ELIZA_613_ERMITA DE SANTA MARINA BASELIZA_UDUÑA - ODUÑA_614_PLAZA ANDRA MARI PLAZA_615_BARRIO LA ANTIGUA AUZOA_616_PASEO LA ANTIGUA PASEALEKUA_617_BARRIO LA MARQUESA AUZOA_618_CALLE MARIA DOLORES MADARIA KALEA_619_PLAZA MONASTERIO SANTA CLARA PLAZA_620_CAMINO RITA CANTERA BIDEA_621_BARRIO SANTA CLARA AUZOA_622_BARRIO SANTA CRISTINA AUZOA_623_IGLESIA DE SANTA MARÍA ELIZA_624_ANTIGUAKO ANDRA MARIAREN SANTUTEGIA / SANTUARIO DE LA ANTIGUA_625_URDUÑAKO AMA BIRJI- NAREN ERMITA / ERMITA DE LA VIRGEN DE ORDUÑA_626_MONASTERIO SANTA CLARA MONASTERIOA_627_CPEIPS NTRA. SRA. DE LA ANTIGUA HLBHIP_VALLE DE TAPAGA - TAPAGAAN_628_CALLE DOLORES IBARRURI KALEA_629_CALLE LEONOR ELÍAS KALEA_630_CALLE MARÍA MAGDALENA KALEA_631_IGLESIA SANTA MARIA MAGDALENA ELIZA_ ZALDIBA_632_CALLE MIREN MAORTUA KALEA_633_CALLE SANTA ISABEL KALEA_ZALLA_634_PLAZA CAROLINA RENOBALES ENPARANTZA_635_BARRIO EL CARMEN AUZOA_636_BARRIO LA INMACULADA AUZOA_637_BARRIO LA MAGDALENA AUZOA_638_PLAZA MADRES IRLANDESAS PLAZA_639_CALLE MAESTRA CONSUELO ROBREDO KALEA_639_CALLE NUESTRA SEÑORA DEL ROSARIO KALEA_640_ERMITA DE SANTA ANA DE BOLUNBURU BASELIZA_641_ERMITA DE LA MAGDALENA BASELIZA_642_IGLESIA DE SANTA ISABEL ELIZA_643_ SORTZEZ GARBIAREN ELIZA / IGLESIA DE LA INMACULADA CONCEPCIÓN_ ZAMUDIO_644_CALLE CARMEN MENDIGUREN ABAUNZA KALEA_645_CALLE ENARA KALEA_ZAATAMO _646_GRUPO SANTA BARBARA ETXETALDEA_647_BURBUSTUKO IGOKUNDEAREN BASELIZA / ERMITA DE LA ASCENSIÓN DE BURBUSTU_ZEANUI_648_IGLESIA ANDRA MARI ELIZA_649_ERMITA SANTA LUZIA BASELIZA_650_ERMITA SANTA AGUEDA BASELIZA_651_EDURRETAKO ANDRA MARIA BASELIZA / ERMITA DE NUESTRA SEÑORA DE LAS NIEVES_652_PIE- TATEAREN BASELIZA / ERMITA DE LA PIEDAD_ZEBEIO_653_CANTÓN MAURIZIA ALDEITURRIAGA KANTOIA_654_ZEBERIOGANEKO ANDRA MARI SANTUTEGIA / SANTUARIO DE NUESTRA SEÑORA DE ZEBERIOGANA_655_ASENTZIOA EDO IGOKUNDEAREN BASELIZA / ERMITA DE LA ASCENSIÓN_ZIEBENA_656_CALLE VIRGEN DEL PUERTO KALEA_657_ERMITA DE NUESTRA SEÑORA VIRGEN DEL PUERTO BASELIZA_ZIOTZA - BOLIBA_658_SANTA MARIA ZIORTZAKO MONASTEGIA / MONASTERIO DE SANTA MARÍA DE ZENARRUZA_659_ERMITA DE SANTA MARIA MAGDALENA DE ZEINKA-ZEARREGI BASELIZA_660_COROMOTOKO ANDRA MARIREN KAPERA / CAPILLA DE NUESTRA SEÑORA DEL COROMOTO ';
  
  static init () {
    Basics.id = "w11p_v005"; // ID para cookies
    
    Metrics.init(() => Main.resize()); // Tamaños y resize
    Keyboard.enable(); // ESC para cerrar ventana
    Accessibility.init(); // Utils accesibilidad
    Statics.init(); // Si estamos en debug pinta un FPS counter
    Interaction.init({ ajax: true }) // Posiciones del cursor (Movimiento, click...), Acciones links, drag...
    ControllerWindow.init(); // Control ventanas

    Basics.hasCookies = false;
    [...GetBy.selector("[data-cookiecategory='analytics']")].map(item=> {
      Basics.hasCookies = true;
    })
    

    BG.init(CMS_COLORS); // Control de paletas y color de fondo de pantallas. Automatico si añadimos un data-palette='loquesea' en el div con data-page
    InterfaceCanvas.init(); // Canvas de interface, se usa con Cursor
    Cookies.init(); // Checkea y saca el aviso de cookies

    LoaderController.add(new PagesLoader()); // Carga/Precarga de paginas HTML
    LoaderController.add(new MediaLoader()); // Carga/Precarga de imgs
    LoaderController.onComplete = () => Main.setup();
    // LoaderController.update = progress => {  };
    LoaderController.init();

    Header.init();
    Header.directHide();
    ScrollTop.init();

    this.doCuchilloInfo();
    this.setWorker();

    // LOOP
    if (isDebug) {
      gsap.ticker.add(() => { Main.loopDebug(); });
    } else {
      gsap.ticker.add(() => { Main.loop(); });
    }

    this.setupData();   
  }

  static setup () {
    this.setupEvents();
    // INIT PAGE
    ControllerPage.init(Wrap.mainholder);
  }

  static setupEvents () {
    EventDispatcher.addEventListener(Page.ON_SHOW, () => {
      //Cursor.start();
      Loading.stop();
    });
    EventDispatcher.addEventListener(Page.ON_HIDE, () => {
      //Cursor.hide();
    });
    EventDispatcher.addEventListener(Page.ON_HIDE_END, () => {
      Loading.start();
    });

    EventDispatcher.addEventListener(Win.ON_HIDE, () => { Scroll.setEnabled(true); });
    EventDispatcher.addEventListener(Win.ON_SHOW, () => { Scroll.setEnabled(false); });
  }

  static resize () {
    InterfaceCanvas.resize();
    ControllerPage.resize();
    Header.resize();
  }

  static loop () {
    ControllerPage.loop();
    InterfaceCanvas.loop();
    Header.loop();

    if (Scroll.isScrolling) Scroll.loop();
  }

  static loopDebug () {
    Statics.begin();
    this.loop();
    Statics.end();
  }

  static doCuchilloInfo () {
    console.log('%cby Cuchillo', 'background: #000; color: #bada55; padding:25px 100px;');
    console.log('⟶ http://cuchillo.studio');
    console.log('⟶ https://www.instagram.com/_cuchillo');
    console.log('⟶ https://twitter.com/somoscuchillo');
    console.log('⟶ https://twitter.com/mr__corrales');
    console.log('');
    console.log('Gsap by Greenshock');
    console.log('⟶ https://greensock.com');
    console.log('');
    console.log('Font: Fraktion Mono by Pangram Pangram');
    console.log('⟶ https://pangrampangram.com/products/fraktion');
    console.log('');
    console.log('SVGOMG');
    console.log('⟶ https://jakearchibald.github.io/svgomg/');
    console.log('');
    console.log('Favicon Generator');
    console.log('⟶ https://realfavicongenerator.net');
  }

  static setWorker () {
    if ('serviceWorker' in navigator && !isDebug) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(function () { });
    }
  }

  static setupData() {
    const data = this.data.split("_");
    const towns = {}

    let town = "";
    let isStreet = true;
    for(let i=0; i<this.data.length; i++) {
      //if(i+1<data.length) {
        if(!data[i]) break;

        if(isStreet && isNaN(data[i])) {
          isStreet = false;
          town = data[i];
          towns[town] = {
            town: town,
            streets: []
          }
        } else if(!isNaN(data[i])){
          isStreet = false;
        } else {
          isStreet = true;
          towns[town].streets.push(this.data[i].trim());
        }
      }
  }
}

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}