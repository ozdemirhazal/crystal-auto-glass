import AudiLogo from "../library/logos/audilogo.png";
import BmwLogo from "../library/logos/bmwlogo.png";
import FordLogo from "../library/logos/fordlogo.png";
import PegoLogo from "../library/logos/pegologo.png";
import MercedesLogo from "../library/logos/mercedeslogo.png";
import KiaLogo from "../library/logos/kialogo.png";
import RenaultLogo from "../library/logos/renaultlogo.png";
import VwLogo from "../library/logos/vwlogo.png";

const logos = [
  { id: 1, src: AudiLogo },
  { id: 2, src: BmwLogo },
  { id: 3, src: FordLogo },
  { id: 4, src: PegoLogo },
  { id: 5, src: MercedesLogo },
  { id: 6, src: KiaLogo },
  { id: 7, src: RenaultLogo },
  { id: 8, src: VwLogo },
];

function GetLogos() {
  return logos;
}

export default GetLogos;
