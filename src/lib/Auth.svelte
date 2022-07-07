<script lang="ts">
  import near from '../utils/near'

  const signOut = () => {
    $near.wallet.signOut();
    near.update(n => ({...n, user: undefined}))
  }

  const signIn = () => {
    $near.wallet.requestSignIn();
  }
</script>

{#if $near.user }
  <p>How are you {$near.user}?</p>
  <button on:click={signOut}>
    Sign Out
  </button>
{:else}
  <button on:click={signIn}>
    Sign In
  </button>
{/if}


<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
