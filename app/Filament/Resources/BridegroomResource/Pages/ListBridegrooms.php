<?php

namespace App\Filament\Resources\BridegroomResource\Pages;

use App\Filament\Resources\BridegroomResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBridegrooms extends ListRecords
{
    protected static string $resource = BridegroomResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
