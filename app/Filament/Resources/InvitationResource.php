<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InvitationResource\Pages;
use App\Models\Bridegroom;
use App\Models\Invitation;
use App\Models\Music;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class InvitationResource extends Resource
{
    protected static ?string $model = Invitation::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                CuratorPicker::make("cover_image")->label("Cover Image"),
                TextInput::make('slug')
                    ->label('Slug')
                    ->default("pengantin-".Str::random(5)),
                CuratorPicker::make("media")
                    ->label("Galeri Foto")
                    ->required()
                    ->relationship("media", "title")
                    ->multiple()
                    ->columnSpanFull(),
                Select::make('groom_id')
                    ->label('Pengantin Pria')
                    ->options(Bridegroom::where("gender", 0)->pluck('full_name', 'bridegroom_id'))
                    ->searchable()->required(),
                Select::make('bride_id')
                    ->label('Pengantin Wanita')
                    ->options(Bridegroom::where("gender", 1)->pluck('full_name', 'bridegroom_id'))
                    ->searchable()->required(),
                Select::make('music_id')
                    ->label('Music')
                    ->options(Music::pluck('title', 'music_id'))
                    ->searchable()
                    ->nullable(),
                Repeater::make('events')
                    ->label('Events')
                    ->schema([
                        TextInput::make('event_type')->label("Jenis event")->required(),
                        DateTimePicker::make('date')->label("Waktu")->required(),
                        TextInput::make('location')->label("Tempat event")->required(),
                        TextInput::make('gmaps_event')->label("gmaps")->required(),
                    ])->required(),
                Repeater::make('love_story')
                    ->label('Love Story')
                    ->schema([
                        TextInput::make('title')->required(),
                        DateTimePicker::make('date')->label("Waktu")->required(),
                        Textarea::make('description')->label("Deskripsi")->required(),
                    ])
                    ->nullable(),
                Repeater::make('gift')
                    ->label('Gift')
                    ->schema([
                        TextInput::make('name')->required(),
                        TextInput::make('account_number')->required(),
                    ])
                    ->nullable(),
                Repeater::make('guest')
                    ->label('Data Tamu')
                    ->schema([
                        TextInput::make('url')->required()->hidden(),
                        TextInput::make('name')->label("Nama Tamu")->required()->live(onBlur: true)->afterStateUpdated(function (callable $set, $state) {
                            $set('url', Str::slug($state));
                        }),
                        TextInput::make('ucapan')->label("Ucapan")->hidden()->default(""),
                        Toggle::make('kehadiran')->label("kehadiran")->hidden()->default(null),
                    ])->reorderable(false)->grid(3),
                Toggle::make('isActive')
                    ->label('Active')
                    ->nullable(),
                Toggle::make('muslim')
                ->label('Muslim')
                ->nullable(),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
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
            'index' => Pages\ListInvitations::route('/'),
            'create' => Pages\CreateInvitation::route('/create'),
            'edit' => Pages\EditInvitation::route('/{record}/edit'),
        ];
    }
}
