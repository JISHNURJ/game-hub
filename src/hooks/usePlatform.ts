import useData from "./useData";

interface PlatformImage {
  image_background: string;
}

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
  platform: PlatformImage[];
}

const usePlatfroms = () => useData<Platfrom>("/platforms/lists/parents");

export default usePlatfroms;
