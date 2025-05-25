<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BridegroomResource\Pages;
use App\Filament\Resources\BridegroomResource\RelationManagers;
use App\Models\Bridegroom;
use App\Rules\InstagramUrl;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BridegroomResource extends Resource
{
    protected static ?string $model = Bridegroom::class;

    protected static ?string $navigationIcon = 'heroicon-s-user';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('full_name')->required(),
                TextInput::make('nick_name')->required(),
                TextInput::make('father_name')->required(),
                TextInput::make('mother_name')->required(),
                TextInput::make('which_child')->required()->numeric(),
                TextInput::make('instagram')->required()->rule(new InstagramUrl()),
                Select::make("gender")->options([
                    true => "Wanita",
                    false => "Pria",
                ])->native(false)->required(),
                CuratorPicker::make("media_id")->label("Foto pengantin"),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                CuratorColumn::make('media_id')->label("Foto")->size(40),
                TextColumn::make('full_name')->label("Nama Lengkap"),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBridegrooms::route('/'),
            'create' => Pages\CreateBridegroom::route('/create'),
            'edit' => Pages\EditBridegroom::route('/{record}/edit'),
        ];
    }
}
