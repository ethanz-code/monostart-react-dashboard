import { ZapIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2 justify-center px-4">
      <Badge>
        <ZapIcon className="-ms-0.5 opacity-60" size={12} aria-hidden="true" />
        Badge 1
      </Badge>
      <Badge>
        <ZapIcon className="-ms-0.5 opacity-60" size={12} aria-hidden="true" />
        Badge 2
      </Badge>
      <Badge>
        <ZapIcon className="-ms-0.5 opacity-60" size={12} aria-hidden="true" />
        Badge 3
      </Badge>
    </div>
  );
}
