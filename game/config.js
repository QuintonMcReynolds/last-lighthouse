// Last Lighthouse settings. The game has its own Supabase project (table: supabase/setup.sql).
// The publishable key is meant to be public: the database only lets it INSERT events.
"use strict";

const CONFIG = {
  GAME_VERSION: "lh-1.0.0",
  STORAGE_PREFIX: "lh_",
  SUPABASE_URL: "https://xkhbjlkseqpasbuezrgl.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraGJqbGtzZXFwYXNidWV6cmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExNzE3MjYsImV4cCI6MjEwNjc0NzcyNn0.1Fm03VoYSSwdqoDGDmrKlOR_O-EpwLcVncYErvmh6sM",

  // Experiment: does a nudge (Cuetip thinks out loud after 75 s without progress) help
  // players finish? Assignment is a hash of the anonymous player id, sticky per player.
  EXPERIMENT_ID: "lh1_hint_nudge",
  VARIANTS: ["standard", "nudge"],
};
