import {IAnnotation, IDocument} from "../src/reducers/documents";

const typical: IDocument = ({
	tree: null,
  id: 'typical',
  "annotations": [
    {
      "attributes": {},
      "start": 0,
      "end": 3555,
      "type": "tag:TEI",
    },
    {
      "attributes": {},
      "start": 1,
      "end": 10,
      "type": "tag:teiHeader"
    },
    {
      "attributes": {
        "type": "uuid",
        "value": "1adc118d-78a9-45d4-8c2d-3e7f38960e0b"
      },
      "start": 2,
      "end": 2,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "type": "id",
        "value": "2153"
      },
      "start": 3,
      "end": 3,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "type": "date",
        "value": "1635-06-22"
      },
      "start": 4,
      "end": 4,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "type": "sender",
        "value": "groot.hugo.1583-1645"
      },
      "start": 5,
      "end": 5,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "type": "senderloc",
        "value": "se:paris.fra"
      },
      "start": 6,
      "end": 6,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "type": "recipient",
        "value": "camerarius.ludwig.1573-1651"
      },
      "start": 7,
      "end": 7,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "resp": "inferred",
        "type": "recipientloc",
        "value": "se:den-haag.nld"
      },
      "start": 8,
      "end": 8,
      "type": "tag:meta"
    },
    {
      "attributes": {
        "type": "language",
        "value": "la"
      },
      "start": 9,
      "end": 9,
      "type": "tag:meta"
    },
    {
      "attributes": {},
      "start": 11,
      "end": 3554,
      "type": "tag:text"
    },
    {
      "attributes": {},
      "start": 12,
      "end": 3553,
      "type": "tag:body"
    },
    {
      "attributes": {
        "type": "letter"
      },
      "start": 13,
      "end": 2715,
      "type": "tag:div"
    },
    {
      "attributes": {
        "lang": "nl",
        "type": "ed"
      },
      "start": 14,
      "end": 52,
      "type": "tag:head"
    },
    {
      "attributes": {
        "target": "#note-1",
        "type": "note"
      },
      "start": 51,
      "end": 51,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "xml:id": "p-1"
      },
      "start": 53,
      "end": 345,
      "type": "tag:p"
    },
    {
      "attributes": {
        "target": "#note-2",
        "type": "note"
      },
      "start": 186,
      "end": 186,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "target": "#note-3",
        "type": "note"
      },
      "start": 280,
      "end": 280,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "xml:id": "p-2"
      },
      "start": 346,
      "end": 632,
      "type": "tag:p"
    },
    {
      "attributes": {
        "n": "38",
        "xml:id": "pb-38"
      },
      "start": 633,
      "end": 633,
      "type": "tag:pb"
    },
    {
      "attributes": {
        "xml:id": "p-3"
      },
      "start": 634,
      "end": 975,
      "type": "tag:p"
    },
    {
      "attributes": {
        "key": "se:hamburg.deu"
      },
      "start": 645,
      "end": 654,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "target": "#note-4",
        "type": "note"
      },
      "start": 797,
      "end": 797,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "key": "stuart.elizabeth.1596-1662"
      },
      "start": 903,
      "end": 919,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "target": "#note-5",
        "type": "note"
      },
      "start": 919,
      "end": 919,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "xml:id": "p-4"
      },
      "start": 976,
      "end": 1499,
      "type": "tag:p"
    },
    {
      "attributes": {
        "target": "#note-6",
        "type": "note"
      },
      "start": 979,
      "end": 979,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "target": "#note-7",
        "type": "note"
      },
      "start": 1006,
      "end": 1006,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "key": "esp.felipe-iv.1605-1665",
        "type": "person"
      },
      "start": 1043,
      "end": 1051,
      "type": "tag:rs"
    },
    {
      "attributes": {
        "target": "#note-8",
        "type": "note"
      },
      "start": 1051,
      "end": 1051,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "key": "se:paris.fra"
      },
      "start": 1073,
      "end": 1078,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "target": "#note-9",
        "type": "note"
      },
      "start": 1123,
      "end": 1123,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "xml:id": "p-5"
      },
      "start": 1500,
      "end": 1957,
      "type": "tag:p"
    },
    {
      "attributes": {
        "key": "re:picardie.fra"
      },
      "start": 1513,
      "end": 1521,
      "type": "tag:placeName"
    },
    {
      "attributes": {},
      "start": 1605,
      "end": 1618,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "type": "river"
      },
      "start": 1619,
      "end": 1624,
      "type": "tag:geogName"
    },
    {
      "attributes": {
        "key": "gallas.matthias.1588-1647"
      },
      "start": 1625,
      "end": 1634,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "target": "#note-10",
        "type": "note"
      },
      "start": 1634,
      "end": 1634,
      "type": "tag:ref"
    },
    {
      "attributes": {},
      "start": 1669,
      "end": 1676,
      "type": "tag:name"
    },
    {
      "attributes": {
        "key": "re:lorraine.fra"
      },
      "start": 1691,
      "end": 1702,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "key": "sachsen-weimar.bernhard.1604-1639"
      },
      "start": 1764,
      "end": 1778,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "target": "#note-11",
        "type": "note"
      },
      "start": 1778,
      "end": 1778,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "key": "feuquieres.1590-1640"
      },
      "start": 1779,
      "end": 1791,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "target": "#note-12",
        "type": "note"
      },
      "start": 1791,
      "end": 1791,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "key": "gallas.matthias.1588-1647"
      },
      "start": 1861,
      "end": 1869,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "xml:id": "p-6"
      },
      "start": 1958,
      "end": 2296,
      "type": "tag:p"
    },
    {
      "attributes": {},
      "start": 2012,
      "end": 2019,
      "type": "tag:name"
    },
    {
      "attributes": {},
      "start": 2180,
      "end": 2187,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "xml:id": "p-7"
      },
      "start": 2297,
      "end": 2615,
      "type": "tag:p"
    },
    {
      "attributes": {
        "target": "#note-13",
        "type": "note"
      },
      "start": 2318,
      "end": 2318,
      "type": "tag:ref"
    },
    {
      "attributes": {
        "type": "closer",
        "xml:id": "p-8"
      },
      "start": 2616,
      "end": 2674,
      "type": "tag:p"
    },
    {
      "attributes": {},
      "start": 2663,
      "end": 2663,
      "type": "tag:lb"
    },
    {
      "attributes": {
        "key": "groot.hugo.1583-1645"
      },
      "start": 2663,
      "end": 2673,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "type": "closer",
        "xml:id": "p-9"
      },
      "start": 2675,
      "end": 2714,
      "type": "tag:p"
    },
    {
      "attributes": {
        "key": "se:paris.fra"
      },
      "start": 2675,
      "end": 2683,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "type": "para"
      },
      "start": 2716,
      "end": 2826,
      "type": "tag:div"
    },
    {
      "attributes": {
        "xml:id": "p-10"
      },
      "start": 2717,
      "end": 2825,
      "type": "tag:p"
    },
    {
      "attributes": {
        "lang": "nl",
        "type": "note"
      },
      "start": 2717,
      "end": 2723,
      "type": "tag:seg"
    },
    {
      "attributes": {
        "key": "camerarius.ludwig.1573-1651"
      },
      "start": 2724,
      "end": 2742,
      "type": "tag:persName"
    },
    {
      "attributes": {
        "key": "co:swe"
      },
      "start": 2761,
      "end": 2768,
      "type": "tag:placeName"
    },
    {
      "attributes": {
        "type": "notes"
      },
      "start": 2827,
      "end": 3552,
      "type": "tag:div"
    },
    {
      "attributes": {
        "n": "6",
        "xml:id": "note-1"
      },
      "start": 2828,
      "end": 2851,
      "type": "tag:note"
    },
    {
      "attributes": {
        "type": "source"
      },
      "start": 2828,
      "end": 2850,
      "type": "tag:seg"
    },
    {
      "attributes": {
        "rend": "i"
      },
      "start": 2836,
      "end": 2842,
      "type": "tag:hi"
    },
    {
      "attributes": {
        "n": "7",
        "xml:id": "note-2"
      },
      "start": 2852,
      "end": 2880,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "8",
        "xml:id": "note-3"
      },
      "start": 2881,
      "end": 2924,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "1",
        "xml:id": "note-4"
      },
      "start": 2925,
      "end": 2961,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "2",
        "xml:id": "note-5"
      },
      "start": 2962,
      "end": 3072,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "3",
        "xml:id": "note-6"
      },
      "start": 3073,
      "end": 3101,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "4",
        "xml:id": "note-7"
      },
      "start": 3102,
      "end": 3138,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "5",
        "xml:id": "note-8"
      },
      "start": 3139,
      "end": 3150,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "6",
        "xml:id": "note-9"
      },
      "start": 3151,
      "end": 3187,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "7",
        "xml:id": "note-10"
      },
      "start": 3188,
      "end": 3251,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "8",
        "xml:id": "note-11"
      },
      "start": 3252,
      "end": 3287,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "9",
        "xml:id": "note-12"
      },
      "start": 3288,
      "end": 3366,
      "type": "tag:note"
    },
    {
      "attributes": {
        "n": "10",
        "xml:id": "note-13"
      },
      "start": 3367,
      "end": 3551,
      "type": "tag:note"
    },
    {
      "attributes": {
        "rend": "i"
      },
      "start": 3489,
      "end": 3505,
      "type": "tag:hi"
    }
  ].map((a: IAnnotation, i: number) => { a.id = i; return a; }),
  "text": "2153. 1635 juni 22. Aan L. Camerarius.Satis est, quod perlatae sunt ad te, quas scripseram, literae, causae dilati responsi et justae sunt et nullum in mora fuit periculum. Et dulcius mihi est velut uno conspectu contueri tot honores, qui maximo viro D. cancellario illis in partibus maximi intra merita tamen stantes contigerunt.Vectigalis negotium, ut prudenter ais, difficile apud homines talia non segniter curantes, quod emolliverit verbis comibus, multum gaudeo planeque consentio et ad ea, quae in Borussia aguntur, utile id futurum et tibi in posterum ad continendam illam amicitiam minus fore difficultatis.Cum ventos Hamburgum ferentes habuerit, non dubito, quin jam illis sit in locis, in quibus eum esse maxime expedit publico. Ego ut hinc legatus quamprimum mittatur, qui consilia ipsius adjuvet, eniti non desinam. Scio magnum in ejus animo desiderium fuisse compellandi Bohemiae reginam ac laetor, quod a colloquio ipsi dilectior discesserit.Rex post editum illud scriptum, quod nuper misi de causis belli in Hispanum, vulgavit et alterum paris argumenti, sed propius res Belgarum spectans, in quo nonnulla excerpta sunt capita ejus federis, quod merito videre desideras et ego tecum laborabo, ut e latebris, siqua fieri potest, protrahatur. An quae in hoc fit edicto invitatio Belgarum ad libertatem sub illis, quas adscriptas vides conditionibus, eam, quae speratur effectura sit civitatum, defectionem, video et heic dubitari. Hactenus nihil nisi vi actum video.Quae si et a Picardia in Atrebates eorumque finitimos irruat, priusquam eo penetret superbus transito ad Philipsburgum Rheno Gallasius, erunt per illa loca in arcto res Hispani. Rex magnam e Lotharingia manum promittit, imo ut puto jam mittit auxillo iis, qui sub duce Bernhardo Feuquerioque sunt, quibus, ut spero, difficile non erit carpere, si non disjicere Gallasii agmen, neque transrhenanis partibus tanto exercitu exoneratis praedari aliquid aggredi.Per Brabantiam famem nostris voluisse facere videntur Hispani freti Leodiensium magis fida in ipsos amicitia; sed ei rei jam provisum intelligo perterritis Leodiensibus, conciliatis agrestium animis, curataque commeatus e Batavis advectione. Haec tam diligenter administrata dedecorat illa ad Duinquercam, quid aliud dicam quam supinitas.Nobilissimo filio tuo auctam dignitatem tum ob rem ipsam mihi ipsius amantissimo dulce est, tum quod insigne est testimonium optime ipsi volentis potentissimi viri. Quare ut et hoc et caetera consilia vestra Deus fortunet teque cum omni familia publicis rebus et mihi quoque sospitem praestet toto animo ipsum veneror.Illustrissimae Dominationis Tuae addictissimusH. Grotius.Lutetiae, 22 Iunii novi cal. anni 1635.Adres: Ludovico Camerario, Reginae Regnique Sueciae Consiliario et Legato apud Praepot. Ord. Foeder. Belgii.Gedrukt Epist., p. 155.Vgl. Livius XXXVIII, 25, 13.De Zweedse rijkskanselier Axel Oxenstierna.Vgl. no. 2144, p. 25 en n. 3 aldaar.Elisabeth Stuart, dochter van Jacobus I van Engeland en weduwe van de in 1632 overleden paltsgraaf Frederik V.Lodewijk XIII van Frankrijk.Zie no. 2137, p. 15 en n. 10 aldaar.Philips IV.Zie no. 2135, p. 11 en n. 16 aldaar.Matthias, graaf Gallas, veldheer in het leger van Ferdinand II.Bernhard, hertog van Saksen-Weimar.Manasse de Pas, markies van Feuquières; zie over hem V no. 1960, p. 290 n. 2.Joachim Camerarius (1603-1687). De gelukwens heeft betrekking op Joachims benoeming tot raad van de kroon van Zweden; zie Oxenst. Skrifter 1. afd. XIII, p. 268 no. 126 dd. 27 mei 1635."
});

export default typical;