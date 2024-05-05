import {Modal} from "~/app/@modal/(.)img/[id]/modal";
import {FullImagePage} from "~/app/components/full-image-page";

export default function PhotoModal({params: {id: photoId}}: { params: { id: string } }) {

  return (
    <Modal>
      <FullImagePage photoId={photoId}/>
    </Modal>
  );
}
