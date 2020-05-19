import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faAddressCard,
    faBolt,
    faChartBar,
    faClock,
    faCloudDownloadAlt,
    faCircle,
    faColumns,
    faComment,
    faEye,
    faFileAlt,
    faFileCode,
    faGlobe,
    faHistory,
    faMoon,
    faPaste,
    faPencilAlt,
    faPlus,
    faShareSquare,
    faSignOutAlt,
    faThumbtack,
    faTimes,
    faTrash,
    faTv,
    faQuestionCircle,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
    faDiscourse,
    faDropbox,
    faFacebook,
    faGithub,
    faGitlab,
    faGoogle,
    faMastodon,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

export function setUpFontAwesome() {
    library.add(faBolt, faPlus, faChartBar, faTv, faFileAlt, faCloudDownloadAlt,
        faTrash, faSignOutAlt, faComment, faDiscourse, faMastodon, faGlobe,
        faThumbtack, faClock, faTimes, faGithub, faGitlab, faGoogle, faFacebook,
        faDropbox, faTwitter, faUsers, faAddressCard, faEye, faPencilAlt, faColumns,
        faMoon, faQuestionCircle, faShareSquare, faHistory, faFileCode, faPaste,
        faCircle)
}
