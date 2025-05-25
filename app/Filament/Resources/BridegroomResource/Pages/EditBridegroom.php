<?php

namespace App\Filament\Resources\BridegroomResource\Pages;

use App\Filament\Resources\BridegroomResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBridegroom extends EditRecord
{
    protected static string $resource = BridegroomResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
