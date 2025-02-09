'use client';

import { useState } from 'react';
import DeleteModal from '@/components/modals/DeleteModal';

//TODO: Delete this file, just used to see delete dialog in action
export default function DummyPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Click to open delete modal</button>
      <DeleteModal
        open={open}
        name="selected item"
        onClose={() => setOpen(false)}
        onSubmit={() => console.log('Item deleted')}
      />
    </div>
  );
}
