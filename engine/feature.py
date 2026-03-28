from playsound import playsound
import eel

@eel.expose
# Starting sound.
def PlayAssistantSound():
    music_dir ="www\\assets\\audio\\start_audio.mp3"
    playsound(music_dir)